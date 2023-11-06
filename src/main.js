import "./assets/style.css";
const layouts = require("./js/layouts.js");

const { navigation } = require("./js/navigation.js");
const { restart } = require("./js/navigation.js")

const LS = require("./js/localStorage.js")
const searchAndSort = require("./js/searchAndSort.js");

const mainScreen = document.querySelector("#main-screen"),
    addIngestionTitleInput = document.querySelector(".add-ingestion__title"),
    foodSearchResult = document.querySelector(".search-results"),
    addIngestionWeightInput = document.querySelector(".add-ingestion__weight"),
    adIngestionBtn = document.querySelector(".add-ignestion-btn"),
    addProductTitleInput = document.querySelector(".add-product__title"),
    addProductCaloryInput = document.querySelector(".add-product__calory"),
    addProductCategoryInput = document.querySelector(".add-product__category"),
    addProductBtn = document.querySelector(".add-product-btn"),
    removeUserBtn = document.querySelector(".remove-user-btn");


navigation();

window.onload = () => {
    LS.loadMainScreen(mainScreen);
    addProductBtn.onclick = () => {
        if (addProductTitleInput.value && addProductCaloryInput.value && addProductCategoryInput.value) {
            LS.addProduct(addProductTitleInput.value, addProductCaloryInput.value, addProductCategoryInput.value);
            addProductTitleInput.value = "";
            addProductCaloryInput.value = "";
            addProductCategoryInput.value = "Категория";
        } else alert("Заполните данные о продукте");
    }

    addIngestionTitleInput.oninput = () => {
        let filteredFood = searchAndSort.search(addIngestionTitleInput.value, LS.user.food);
        if (filteredFood.length > 0) {
            foodSearchResult.style.display = "block";
            filteredFood.forEach(item => {
                foodSearchResult.append(layouts.searchResults(item));
            })
        }
    }

    removeUserBtn.onclick = () => {
        LS.removeUser();
        restart();
        LS.loadMainScreen(mainScreen);
    }
}
