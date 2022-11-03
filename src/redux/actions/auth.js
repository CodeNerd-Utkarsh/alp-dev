import { Types } from "./actionTypes";

export const logout = () => (dispatch) => {
    dispatch({
        type: Types.USER_LOGOUT
    });
};
