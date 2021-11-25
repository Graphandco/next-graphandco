import { useState, useEffect } from "react";
import Header from "./header/Header";

export default function Layout({ children }) {
   const [theme, setTheme] = useState("dark");

   useEffect(() => {
      saveTheme(theme);
      document.documentElement.setAttribute(
         "data-theme",
         localStorage.getItem("theme")
      );
      setTheme(localStorage.getItem("theme"));
   }, []);

   const switchTheme = () => {
      if (theme === "light") {
         saveTheme("dark");
      } else {
         saveTheme("light");
      }
   };

   const saveTheme = (theme) => {
      setTheme(theme);
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
   };

   return (
      <div className="site-wrapper">
         <Header theme={theme} switchTheme={switchTheme} />
         <main>{children}</main>
         <footer>
            <p>Copyright 2021 Graph and Co :)</p>
         </footer>
      </div>
   );
}
