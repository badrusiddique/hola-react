import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>

    );
};

const useThemeContext = () => useContext(ThemeContext);

export {
    ThemeContext,
    useThemeContext,
};
export default ThemeContextProvider;