import { useState, createContext } from "react";
import {
  defaultMenuContext,
  MenuProviderProps,
  MenuContextType,
} from "../types";

export const MenuContext = createContext<MenuContextType>(defaultMenuContext);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
