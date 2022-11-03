// import langReducer from "./langSlice";
import { messageReducer } from "./message-reducer";
import { userReducer } from "./user-reducer";

const reducers = {
    message: messageReducer,
    user: userReducer,
    // lang: langReducer
};

export default reducers;
