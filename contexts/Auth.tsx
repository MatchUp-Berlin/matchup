import { CognitoUser } from '@aws-amplify/auth';
import { Auth, Hub } from 'aws-amplify';
import React, { useContext, useState, useEffect } from 'react';

interface IAuth {
  currentUser: string | null;
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<CognitoUser>;
  login: (email: string, password: string) => Promise<CognitoUser>;
  logout: () => Promise<void>;
  // resetPassword: (email: string) => Promise<void>;
  verifyEmail: (email: string, code: string) => Promise<void>;
  resendEmailVerififaction: (email: string) => Promise<void>;
}

const AuthContext = React.createContext(null);

/* ----- HOOK ----- */
export function useAuth() {
  //@ts-ignore
  return useContext<IAuth>(AuthContext);
}

/* ----- PROVIDER ----- */
export function AuthProvider({ children }: React.PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  async function signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<CognitoUser> {
    const { user } = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        given_name: firstName,
        family_name: lastName,
      },
    });
    return user;
  }

  async function login(email: string, password: string): Promise<CognitoUser> {
    const { user } = await Auth.signIn(email, password);
    return user;
  }

  async function logout(): Promise<void> {
    await Auth.signOut();
  }

  async function verifyEmail(email: string, code: string): Promise<void> {
    await Auth.confirmSignUp(email, code);
  }

  async function resendEmailVerififaction(email: string): Promise<void> {
    await Auth.resendSignUp(email);
  }

  useEffect(() => {

    /* On First Load */
    Auth.currentAuthenticatedUser()
      .then((user) => user && setCurrentUser(user.username))
      .catch((err) => setCurrentUser(null));
    
    /* On auth events */
    Hub.listen('auth', ({ payload }) => {
      console.log(payload);
      Auth.currentAuthenticatedUser()
        .then((user) => user && setCurrentUser(user.username))
        .catch((err) => setCurrentUser(null));
    });
  }, []);

  const value: IAuth = {
    currentUser,
    signup,
    login,
    logout,
    verifyEmail,
    resendEmailVerififaction,
  };
  //@ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
