import firebase from 'firebase/compat/app';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';

export const AuthContext = React.createContext<firebase.User | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (firebaseUser: React.SetStateAction<firebase.User | null>) => {
        setUser(firebaseUser);
      }
    );

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
