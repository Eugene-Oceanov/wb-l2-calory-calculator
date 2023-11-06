const openMainScreenBtn = document.querySelector(".sidebar-list__item-main"),
    openIngestionScreenBtn = document.querySelector(".sidebar-list__item-ingestion"),
    openFoodScreenBtn = document.querySelector(".sidebar-list__item-food"),
    openSettingsScreenBtn = document.querySelector(".sidebar-list__item-settings"),
    mainScreen = document.querySelector("#main-screen"),
    ingestionScreen = document.getElementById("ingestion-screen"),
    foodScreen = document.getElementById("food-screen"),
    settingsScreen = document.getElementById("settings-screen");


function navigation() {
    openMainScreenBtn.onclick = () => {
        if (localStorage.getItem("user")) {
            mainScreen.style.display = "flex";
            ingestionScreen.style.display = "none";
            foodScreen.style.display = "none";
            settingsScreen.style.display = "none";
        } else return;
    }

    openIngestionScreenBtn.onclick = () => {
        if (localStorage.getItem("user")) {
            ingestionScreen.style.display = "block";
            mainScreen.style.display = "none";
            foodScreen.style.display = "none";
            settingsScreen.style.display = "none";
        } else return;
    }

    openFoodScreenBtn.onclick = () => {
        if (localStorage.getItem("user")) {
            foodScreen.style.display = "block";
            mainScreen.style.display = "none";
            ingestionScreen.style.display = "none";
            settingsScreen.style.display = "none";

        } else return;
    }

    openSettingsScreenBtn.onclick = () => {
        if (localStorage.getItem("user")) {
            settingsScreen.style.display = "block";
            mainScreen.style.display = "none";
            ingestionScreen.style.display = "none";
            foodScreen.style.display = "none";
        } else return;
    }
}

function restart() {
    mainScreen.innerHTML = "";
    mainScreen.style.display = "flex";
    ingestionScreen.style.display = "none";
    foodScreen.style.display = "none";
    settingsScreen.style.display = "none";
}

module.exports = { navigation, restart };