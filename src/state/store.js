import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/ProductsReducer";
import basketProductsReducer from "./basketProducts/basketProductsReducer";
import userReducer from "./user/userReducer";

import thunk from "redux-thunk";


export default configureStore({
    reducer: {
        productsReducer,
        basketProductsReducer,
        userReducer,
    },
    middleware: (curryGetDefaultMiddleware) =>
        curryGetDefaultMiddleware().concat(thunk),
});