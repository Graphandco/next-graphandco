import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import User from "./User";

const Header = ({ theme, switchTheme }) => {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const links = ["accueil", "prestations", "realisations", "contact"];

   return (
      <header>
         <div className="header-wrapper container">
            <Link href="/">
               <a>
                  <Image src={"/images/logo.svg"} width="60" height="60" />
               </a>
            </Link>
            <nav className={isNavOpen ? "open" : ""}>
               {links.map((link) => (
                  <Link key={link} href={link === "accueil" ? "/" : `/${link}`}>
                     <a onClick={() => setIsNavOpen(!isNavOpen)}>{link}</a>
                  </Link>
               ))}
               <div className="theme-switcher" onClick={switchTheme}>
                  {theme === "light" ? (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="yellow"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-moon"
                     >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                     </svg>
                  ) : (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-sun"
                     >
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line
                           x1="18.36"
                           y1="18.36"
                           x2="19.78"
                           y2="19.78"
                        ></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                     </svg>
                  )}

                  {/* <FiSun
                     className={theme === "light" ? "active light" : "dark"}
                  />
                  <RiMoonClearFill
                     className={theme === "dark" ? "active dark" : "light"}
                  /> */}
               </div>
               <User />
            </nav>
            <HiOutlineMenuAlt1
               className="mobile-toggle"
               onClick={() => setIsNavOpen(!isNavOpen)}
            />
         </div>
      </header>
   );
};

export default Header;
