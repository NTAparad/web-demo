export type AuthState = {
  isSignIn: boolean;
  userToken: string | null;
};

export type SignIn = {
  action: "SignIn";
  userToken: string;
};
export type SignOut = {
  action: "SignOut";
};
export type AuthAction = SignOut | SignIn;
