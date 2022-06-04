import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
// const themes = [
//     "light", "dark", "cupcake",
//     "bumblebee", "emerald", "corporate", "synthwave",
//     "retro", "cyberpunk", "valentine", "halloween", "garden",
//     "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe",
//     "black", "luxury", "dracula", "cmyk", "autumn", "business",
//     "acid", "lemonade", "night", "coffee", "winter"
// ];

const THEME_DARK = "halloween"
const THEME_LIGHT = "lofi"

// lofi halloween

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        localStorage.getItem("theme") ? setTheme(localStorage.getItem("theme")) : localStorage.setItem("theme", "light");
    }, []);

    const toggleTheme = () => {
        setTheme(theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
        localStorage.setItem("theme", theme);
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