import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
type theme = "brutalism" | "minimalism";
const themeContext = createContext<{
  theme: theme;
  isBrutalism: boolean;
  toggleTheme: () => void;
}>({
  theme: "minimalism",
  isBrutalism: true,
  toggleTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useLocalStorage<theme>("theme", "minimalism");

  const toggleTheme = () => {
    if (theme === "minimalism") {
      setTheme("brutalism");
    } else {
      setTheme("minimalism");
    }
  };
  const isBrutalism = theme === "brutalism";
  return (
    <themeContext.Provider value={{ theme, toggleTheme, isBrutalism }}>
      {children}
    </themeContext.Provider>
  );
};
