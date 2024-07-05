import { createContext, useContext, useState } from "react";

const themeContext = createContext<{
  theme: "brutalism" | "minimalism";
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
  const [theme, setTheme] = useState<"brutalism" | "minimalism">("brutalism");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "brutalism" ? "minimalism" : "brutalism"
    );
  };
  const isBrutalism = theme === "brutalism";
  return (
    <themeContext.Provider value={{ theme, toggleTheme, isBrutalism }}>
      {children}
    </themeContext.Provider>
  );
};
