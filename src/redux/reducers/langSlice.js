/* eslint-disable semi */
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: false
};

export const langSlice = createSlice({
    name: "langSelector",
    initialState,
    reducers: {
        changeLang: (state) =>
        {
            state.value = !state.value
        }
    }
})

export const { changeLang } = langSlice.actions

export default langSlice.reducer