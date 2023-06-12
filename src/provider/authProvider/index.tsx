import { createContext, useContext } from "react";
import { useAuth } from "../../hooks/useAuth";

type AuthContextType =
  | {
      user: Record<string, any>;
      signIn: (arg: any) => void;
      signOut: () => void;
    }
  | any;

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
