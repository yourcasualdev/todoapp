import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        localStorage.getItem("theme") ? setTheme(localStorage.getItem("theme")) : localStorage.setItem("theme", "light");
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

const useThemeContext = () => {
    return useContext(ThemeContext);
}

export default ThemeProvider;
export { useThemeContext };