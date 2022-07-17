import { configureStore } from "@reduxjs/toolkit";

import configReducer from "../features/configSlice";
import timerReducer from "../features/timerSlice";


export const store = configureStore({
    reducer: {
        config: configReducer,
        timer: timerReducer,
    },
}
)