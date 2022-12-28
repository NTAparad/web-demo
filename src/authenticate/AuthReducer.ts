import { AuthAction, AuthState } from "../types/Auth";

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.action) {
    case "SignIn":
      return {
        ...state,
        userToken: action.userToken,
        isLogin: true,
      };
    case "SignOut":
      return {
        ...state,
        userToken: null,
        isLogin: false,
      };
    default:
      return state;
  }
};
