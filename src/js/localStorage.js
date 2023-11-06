const layouts = require("./layouts.js");

module.exports = {
    date: new Date(),

    user: {
        name: "",
        weight: null,
        calory: null,
        ingestion: [],
        food: [],
    },

    getUser: function () {
        if (localStorage.getItem("user")) {
            this.user = JSON.parse(localStorage.getItem("user"));
        }
    },

    loadMainScreen: function (node) {
        if (!localStorage.getItem("user")) {
            const greetingsScreen = layouts.greetingsScreen()
            node.append(greetingsScreen)
            greetingsScreen.querySelector(".greetings__save-user-btn").onclick = () => {
                if (greetingsScreen.querySelector(".greetings-name-input").value &&
                    greetingsScreen.querySelector(".greetings-weight-input").value &&
                    greetingsScreen.querySelector(".greetings-calory-input").value) {
                    this.user.name = greetingsScreen.querySelector(".greetings-name-input").value;
                    this.user.weight = greetingsScreen.querySelector(".greetings-weight-input").value;
                    this.user.calory = greetingsScreen.querySelector(".greetings-calory-input").value;
                    localStorage.setItem("user", JSON.stringify(this.user));
                    node.innerHTML = ``;
                    node.append(layouts.mainScreen(this.user));
                } else alert("Заполните данные о себе")
            }
        } else {
            this.getUser();
            const mainScreen = layouts.mainScreen(this.user);
            node.append(mainScreen);
        }
    },

    addIngestion: function (arr) {
        let ingestion = {
            date: new Date(),
            products: arr
        }
        this.user.ingestion.push(ingestion);
        localStorage.setItem("user", JSON.stringify(this.user));
    },



    addProduct: function (title, calories, category) {
        let product = {
            title: title,
            calories: calories,
            category: category
        }
        this.user.food.push(product);
        localStorage.setItem("user", JSON.stringify(this.user));
    },





    removeUser: function () {
        localStorage.removeItem("user");
    }
}