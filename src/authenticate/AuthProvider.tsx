import { createContext, FunctionComponent, ReactNode, useReducer } from "react";
import { authReducer } from "./AuthReducer";
import { AuthState } from "../types/Auth";
import { signIn, signOut } from "./AuthActions";

type Props = {
  children: ReactNode;
};

type authContext = {
  isSignIn: boolean;
  userToken: string | null;
  logIn: (token: string) => void;
  logOut: () => void;
};

const initAuthContext: authContext = {
  isSignIn: false,
  userToken: null,
  logIn: (token: string) => {},
  logOut: () => {},
};

const initState: AuthState = {
  userToken: null,
  isSignIn: false,
};
export const AuthContext = createContext<authContext>(initAuthContext);
export const AuthContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);
  const logMethod = {
    logIn: (token: string) => {
      dispatch(signIn(token));
    },
    logOut: () => {
      dispatch(signOut());
      localStorage.removeItem("userToken");
    },
  };

  return (
    <AuthContext.Provider value={{ ...state, ...logMethod }}>
      {children}
    </AuthContext.Provider>
  );
};
