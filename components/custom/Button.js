import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const Button = ({
   title,
   link,
   outside,
   small,
   onClick,
   center,
   disabled,
   mt,
   mr,
   mb,
   ml,
}) => {
   const [hasMounted, setHasMounted] = useState(false);
   useEffect(() => {
      setHasMounted(true);
   }, []);

   if (!hasMounted) return null;
   return (
      <Btn
         small={small}
         onClick={onClick}
         center={center}
         mt={mt}
         mr={mr}
         mb={mb}
         ml={ml}
         disabled={disabled}
      >
         {link ? (
            outside ? (
               <a href={link} target="blank">
                  <span>{title}</span>
               </a>
            ) : (
               <Link href={link}>
                  <a>
                     <span>{title}</span>
                  </a>
               </Link>
            )
         ) : (
            <span>{title}</span>
         )}
      </Btn>
   );
};

const Btn = styled.button`
   display: block;
   position: relative;
   isolation: isolate;
   border: none;
   cursor: pointer;
   line-height: 1.5;
   letter-spacing: 0.05rem;
   margin-left: ${(props) => props.center && "auto"};
   margin-right: ${(props) => props.center && "auto"};
   margin-top: ${(props) => props.mt && props.mt + "rem"};
   margin-right: ${(props) => props.mr && props.mr + "rem"};
   margin-bottom: ${(props) => props.mb && props.mb + "rem"};
   margin-left: ${(props) => props.ml && props.ml + "rem"};
   font-family: var(--main-font);
   background-color: var(--orange);

   &:before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--contrast);
      -webkit-clip-path: circle(0% at 100% 100%);
      clip-path: circle(0% at 100% 100%);
      transition: 0.3s;
      z-index: -1;
   }

   &:hover,
   &:focus {
      span {
         color: var(--theme-color);
      }
      &:before {
         -webkit-clip-path: circle(70% at 50% 50%);
         clip-path: circle(70% at 50% 50%);
      }
   }

   &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
   }

   span {
      display: block;
      padding: ${(props) => (props.small ? "0.5em 1.5em" : ".6em 2em")};
      color: black;
      font-size: 1.1rem;
      font-weight: bold;
      @media (max-width: 767px) {
         padding: ${(props) => (props.small ? "0.3em 1em" : ".4em 1.5em")};
      }
   }
   /* &:hover span {
    color: var(--secondary-400);
  } */
`;

export default Button;
