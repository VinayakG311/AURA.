import { loginFailure, loginStart, loginSuccess, logoutState } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, action) => {
  if (action.type === "LOGOUT") {
    dispatch(logoutState());
  }
  if (action.type === "LOGIN") {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", action.user);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  }
  if (action.type === "REGISTER") {
    dispatch(loginStart());
    try {
      console.log(action.user);
      const res = await publicRequest.post("/auth/register", action.user);
      console.log(res.data);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  }
};

