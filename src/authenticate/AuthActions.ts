import { AuthAction } from "../types/Auth";

export const signIn = (token: string) => {
  const signInAction: AuthAction = {
    action: "SignIn",
    userToken: token,
  };
  return signInAction;
};
export const signOut = () => {
  const signOutAction: AuthAction = {
    action: "SignOut",
  };
  return signOutAction;
};
