import { useState, createContext } from "react";
import { MenuContextType, MenuProviderProps } from "../types";

const defaultMenuContext: MenuContextType = {
  isMenuOpen: false,
  setIsMenuOpen: () => {},
};

export const MenuContext = createContext<MenuContextType>(defaultMenuContext);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
