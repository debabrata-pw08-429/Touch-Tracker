import { GET_SIGNUP, SET_AUTH } from "./ActionTypes";

const initialState = {
  username: "",
  email: "",
  password: "",
  isAuth: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SIGNUP:
      return {
        ...state,
        username: payload.username,
        email: payload.email,
        password: payload.password,
      };

    case SET_AUTH:
      return {
        ...state,
        username: payload.username,
        isAuth: payload.isAuth,
      };

    default:
      return state;
  }
};

export { reducer };
