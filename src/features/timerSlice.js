import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    time: "25:00",
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {

    },
})

export default timerSlice.reducer