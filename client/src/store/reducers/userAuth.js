import { userAuthStatus } from "../actions";

const userAuth = (state = userAuthStatus, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        auth_status: action.status
      };
    default:
      return state;
  }
};

export default userAuth;
