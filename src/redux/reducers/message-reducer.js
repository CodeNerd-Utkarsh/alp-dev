import { createAction, createReducer } from "@reduxjs/toolkit";
import { Types } from "../actions/actionTypes";

const setMessage = createAction(Types.SET_MESSAGE);
const clearMessage = createAction(Types.CLEAR_MESSAGE);

export const messageReducer = createReducer(
    {
        message: null
    },
    (builder) => {
        builder
            .addCase(setMessage, (state, action) => {
                return {
                    ...state,
                    message: action.payload
                };
            })
            .addCase(clearMessage, (state) => {
                return {
                    ...state,
                    message: null
                };
            })
            .addDefaultCase((state) => state);
    }
);
