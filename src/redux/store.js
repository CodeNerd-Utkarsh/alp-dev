import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import reducers from "./reducers";
import langReducer from "./reducers/langSlice";

const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: hardSet
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
    reducer: {
        persistedReducer: persistedReducer,
        lang: langReducer,

    },
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== "production"
});
