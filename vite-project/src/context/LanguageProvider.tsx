import { createContext, useState, useEffect, ReactNode } from "react";

export const LanguageContext = createContext({
  language: "en-US",
  setLanguage: (language: string) => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en-US"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
