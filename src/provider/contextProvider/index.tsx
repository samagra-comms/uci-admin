import { createContext } from "react";

type AppContextType =
  | {
      isLoading: boolean;
      setIsLoading: (arg: boolean) => void;
    }
  | any;

export const AppContext = createContext<AppContextType | null>(null);
