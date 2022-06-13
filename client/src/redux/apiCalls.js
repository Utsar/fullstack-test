import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./userRedux.js";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
  }
};
