import { GET_SIGNUP, SET_AUTH } from "./ActionTypes";

const getSignupDetails = (data) => {
  return {
    type: GET_SIGNUP,
    payload: { ...data },
  };
};

const setAuth = (data) => {
  return {
    type: SET_AUTH,
    payload: { ...data },
  };
};

export { getSignupDetails, setAuth };
