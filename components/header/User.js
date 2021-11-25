import { useRef, useState, useEffect } from "react";
import Avatar from "react-avatar";
import { signup, login, logout, useAuth } from "../firebase";

const User = () => {
   const currentUser = useAuth();

   const emailRef = useRef();
   const passwordRef = useRef();
   const wrapperRef = useRef();
   const [loading, setLoading] = useState(false);
   const [userOpen, setUserOpen] = useState(false);
   const [error, setError] = useState(false);

   async function handleLogin() {
      setLoading(true);
      setError(false);
      try {
         await login(emailRef.current.value, passwordRef.current.value);
         setUserOpen(false);
      } catch {
         setError(true);
      }
      setLoading(false);
   }

   async function handleLogout() {
      setLoading(true);
      try {
         await logout();
      } catch {
         alert("Error!");
      }
      setUserOpen(false);
      setLoading(false);
   }

   useEffect(() => {
      const checkIfClickedOutside = (e) => {
         // If the menu is open and the clicked target is not within the menu,
         // then close the menu
         if (
            userOpen &&
            wrapperRef.current &&
            !wrapperRef.current.contains(e.target)
         ) {
            setError(false);
            setUserOpen(false);
         }
      };

      document.addEventListener("mousedown", checkIfClickedOutside);

      return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", checkIfClickedOutside);
      };
   }, [userOpen]);

   return (
      <div className="user" ref={wrapperRef}>
         <div className="avatar" onClick={() => setUserOpen(!userOpen)}>
            {currentUser ? (
               <Avatar email={currentUser.email} size="35" round />
            ) : (
               <Avatar facebookId="100008343750912" size="35" round />
            )}
         </div>
         {userOpen && (
            <div className="user-manage">
               {currentUser ? (
                  <>
                     <div className="user-name">
                        Connecté sous <span>{currentUser.email}</span>
                     </div>
                     <div className="logout" onClick={handleLogout}>
                        Se déconnecter
                     </div>
                  </>
               ) : (
                  <>
                     <form className="login-form">
                        <input ref={emailRef} placeholder="Email" />
                        <input
                           ref={passwordRef}
                           type="password"
                           placeholder="Mot de passe"
                        />
                        <button
                           disabled={loading || currentUser}
                           onClick={handleLogin}
                        >
                           OK
                        </button>
                     </form>
                     {error && (
                        <div className="error">Identifiants incorrects !</div>
                     )}
                  </>
               )}
            </div>
         )}
      </div>
   );
};

export default User;
