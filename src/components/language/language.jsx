import React, { createContext, useState, useContext } from "react";

// Create a context for language management
const LanguageContext = createContext();

// Custom hook to use LanguageContext
export const useLanguage = () => useContext(LanguageContext);

// LanguageProvider component to wrap your app with
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ur"); // Default language is Urdu ('ur')

  const switchToEnglish = () => {
    setLanguage("en"); // Switch language to English ('en')
  };

  const switchToUrdu = () => {
    setLanguage("ur"); // Switch language back to Urdu ('ur')
  };

  return (
    <LanguageContext.Provider
      value={{ language, switchToEnglish, switchToUrdu }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
