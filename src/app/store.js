import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/login/loginSlice";
import productsReducer from "../features/product/productSlide";
import categoriesReducer from "../features/category/categorySlide";

export default configureStore({
    reducer: {
        counter: counterReducer,
        form: loginReducer,
        products: productsReducer,
        categories: categoriesReducer,
    },
});
