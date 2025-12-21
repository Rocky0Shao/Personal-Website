import { use } from "react";

const ThemeToggle = () => {
    cont [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);


    return(
        <button className="theme-toggle-button" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    )

}
export default ThemeToggle;