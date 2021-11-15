import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Button from "../custom/Button";

const Hero = () => {
   useEffect(() => {
      let tl = gsap.timeline({ delay: 0 });
      tl.to(".new-wave", {
         backgroundPositionY: "150px",
         ease: "Power2.easeOut",
         duration: 5,
      });
      tl.to(
         ".hero .container",
         {
            opacity: 1,
            top: "50px",
            ease: "Power2.easeOut",
            duration: 2,
         },
         "-=5"
      );
   }, []);

   return (
      <section className="hero">
         <div className="waves">
            <div className="new-wave"></div>
         </div>
         {/* <Waves /> */}
         <div className="container">
            <div className="subtitle">Création de sites web</div>
            <h1>
               Un métier, une<br></br>passion
            </h1>
            <div className="description">
               Nous sommes spécialisés dans la réalisation de sites web modernes
               et intuitifs.
            </div>
            <Button title="Voir nos offres" link="/prestations" mt="1" />
         </div>
      </section>
   );
};

export default Hero;
