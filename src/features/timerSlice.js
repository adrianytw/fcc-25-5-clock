import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sec: 1500,
    tick: false,
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTIme: (state, actions) => {
            state.sec = actions.payload
        },
        toggleTick: (state) => {
            state.tick = !state.tick
        },
        tickDown: (state) => {
            if (state.sec > 1) {
                state.sec -= 1
            }
        },
        resetTimer: (state) => {
            return initialState
        },
    },
})

export const { setTIme, toggleTick, tickDown, resetTimer } = timerSlice.actions

export default timerSlice.reducer