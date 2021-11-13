import Image from "next/image";
import React from "react";
import { Waves } from "./Waves";

const Hero = () => {
   return (
      <section className="hero">
         <div className="waves">
            <div className="new-wave"></div>
         </div>
         {/* <Waves /> */}
         <div className="container">
            <h1>Homepage</h1>
         </div>
      </section>
   );
};

export default Hero;
