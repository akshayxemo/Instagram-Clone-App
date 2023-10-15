import { useState, useEffect } from "react";

export default function useDarkTheme(): [string, (theme: string) => void] {
  const [theme, setTheme] = useState(
    localStorage.theme === undefined ? "dark" : localStorage.theme
  );
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  return [colorTheme, setTheme];
}
