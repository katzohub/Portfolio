import React, { useState, createContext, ReactNode } from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultMenuContext: MenuContextType = {
  isMenuOpen: false,
  setIsMenuOpen: () => {},
};

export const MenuContext = createContext<MenuContextType>(defaultMenuContext);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
