import { useState } from "react";
import useDarkTheme from "../hooks/useDarkTheme";
import { BiSolidMoon, BiSun } from "react-icons/bi";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkTheme();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  return (
    <>
      {darkSide ? (
        <BiSolidMoon
          id="moon"
          className="text-slate-300 hover:text-yellow-500 cursor-pointer text-xl animate-pulse hover:animate-none transition ease-in"
          onClick={toggleDarkMode}
        />
      ) : (
        <BiSun
          id="sun"
          className="text-black cursor-pointer text-xl hover:text-slate-600 animate-spin-one transition ease-in"
          onClick={toggleDarkMode}
        />
      )}
    </>
  );
}
