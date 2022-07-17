import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    breakLength: 5,
    sessionLength: 25,
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        
    },
})

export default configSlice.reducer