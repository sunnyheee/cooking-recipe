
import {configureStore} from "@reduxjs/toolkit";
import audioComponentReducer from "./reducer/AudioComponentSlice";

let store = configureStore({
    reducer:{
        audio: audioComponentReducer,
    }
});

export default store;