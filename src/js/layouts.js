const searchAndSort = require("./searchAndSort.js");

module.exports = {
    greetingsScreen: function () {
        const greetingsWrapper = document.createElement("DIV");
        greetingsWrapper.classList.add("main-screen-greetings");
        greetingsWrapper.innerHTML = `<h2 class="main-screen-greetings__title">ПРИВЕТ! <br> Давай познакомимся!</h2>
                                    <div class="main-screen-greetings_form d-flex fd-column">
                                        <input type="text" class="greetings-name-input greetings__input" placeholder="Как Вас зовут?">
                                        <input type="text" class="greetings-weight-input greetings__input" placeholder="Каков Ваш текущий вес?">
                                        <input type="text" class="greetings-calory-input greetings__input" placeholder="Какова Ваша дневная норма калорий?">
                                        <button class="greetings__save-user-btn">Сохранить</button>
                                    </div>`;
        return greetingsWrapper;
    },

    mainScreen: function (user) {
        const mainScreen = document.createElement("DIV");
        mainScreen.innerHTML = `<h2>Привет, ${user.name}!</h2>
                                <p>Твоя норма калорий на сегодня${user.calory}</p>`;
        return mainScreen;
    },

    searchResults: function (item) {
        let searchItem = document.createElement("P");
        searchItem.classList.add("search-item");
        searchItem.innerText = `${item.title} (${item.calories} кал. на 100 гр.)`;
        return searchItem;
    }
    //     searchResults: function (input, resultsNode, arr) {
    //         resultsNode.innerHTML = "";
    //         let filteredFood = searchAndSort.search(input.value, arr);
    //         if (filteredFood.length > 0 && input.value) {
    //             resultsNode.style.display = "block";
    //             filteredFood.forEach(item => {
    //                 let searchItem = document.createElement("P");
    //                 searchItem.classList.add("search-item");
    //                 searchItem.innerText = `${item.title} (${item.calories} кал. на 100 гр.)`;
    //                 resultsNode.append(searchItem);
    //                 searchItem.onclick = () => input.value = item.title;
    //             })
    //         } else resultsNode.style.display = "none";
    //         return filteredFood;
    //     }
}