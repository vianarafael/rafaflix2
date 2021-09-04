import { createContext, useState } from "react";

// export const defaultLocale = "en";
// export const locales = ["pt", "en", "ja"];
// import { useRouter } from "next/dist/client/router";
export const LanguageContext = createContext([]);

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("en-US");

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
};
