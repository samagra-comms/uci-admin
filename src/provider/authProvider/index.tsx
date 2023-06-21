import { createContext, useContext } from "react";
import { useStore } from "../../store";

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
  const auth = useStore();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
