import {configureStore} from "@reduxjs/toolkit";
import userSlice from "../store/slices/authSlice.js"

export const store = configureStore({
    reducer:{
        user : userSlice
    }
}) 