import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    sec: 1500,
    breakMode: false,
    tick: false,
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        incBreak: (state) => { 
            if (state.breakLength < 60) {
                state.breakLength++
                if (state.breakMode) {
                    state.sec = state.breakLength*60
                }
            }
        },
        decBreak: (state) => {
            if (state.breakLength > 1) {
                state.breakLength-- 
                if (state.breakMode) {
                    state.sec = state.breakLength*60
                }
            } 
        },
        incSession: (state) => {
            if (state.sessionLength < 60) {
                state.sessionLength++ 
                if (!state.breakMode) {
                    state.sec = state.sessionLength*60
                }
            }
        },
        decSession: (state) => {
            if (state.sessionLength > 1) {
                state.sessionLength-- 
                if (!state.breakMode) {
                    state.sec = state.sessionLength*60       
                }
            }
        },
        resetConfig: (state) => {
            return initialState
        },

        setTIme: (state, actions) => {
            state.sec = actions.payload
        },
        toggleTick: (state) => {
            state.tick = !state.tick
        },
        tickDown: (state) => {
            if (state.sec > 0) {
                state.sec -= 1
            }
        },
        resetTimer: (state) => {
            return initialState
        },
        chgMode: (state) => {
            state.breakMode = !state.breakMode
            if (state.breakMode) {
                state.sec = state.breakLength*60
            } else {
                state.sec = state.sessionLength*60
            }
        },
    },
})

export const { incBreak, decBreak, incSession, decSession,
    resetConfig, setTIme, toggleTick, tickDown, resetTimer,
    chgMode,
} = timerSlice.actions

export default timerSlice.reducer