import Image from "next/image";
import Link from "next/link";
import { FiSun } from "react-icons/fi";
import { RiMoonClearFill } from "react-icons/ri";

const Header = ({ theme, switchTheme }) => {
   return (
      <header>
         <div className="header-wrapper container">
            <Link href="/">
               <a>
                  <Image src={"/images/logo.svg"} width="60" height="60" />
               </a>
            </Link>
            <nav>
               <Link href="/">Accueil</Link>
               <Link href="/realisations">Réalisations</Link>
               <div className="theme-switcher" onClick={switchTheme}>
                  <FiSun
                     className={theme === "light" ? "active light" : "dark"}
                  />
                  <RiMoonClearFill
                     className={theme === "dark" ? "active dark" : "light"}
                  />
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
