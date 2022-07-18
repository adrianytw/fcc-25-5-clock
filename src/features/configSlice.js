import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    breakLength: 5,
    sessionLength: 25,
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        incBreak: (state) => { state.breakLength++},
        decBreak: (state) => {
            if (state.breakLength > 1) {
                state.breakLength-- 
            } 
        },
        incSession: (state) => { state.sessionLength++ },
        decSession: (state) => {
            if (state.sessionLength > 1)
                state.sessionLength-- 
        },
        resetConfig: (state) => {
            return initialState
        },
    },
})

export const { incBreak, decBreak, incSession, decSession, resetConfig } = configSlice.actions

export default configSlice.reducer