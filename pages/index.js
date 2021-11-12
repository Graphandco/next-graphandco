import Head from "next/head";
import Hero from "../components/home/Hero";

export default function Home() {
   return (
      <>
         <Head>
            <title>Graph and Co | Un métier, une passion</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Hero />
         {/* <style jsx>{`
            .container {
               min-height: 100vh;
               padding: 0 0.5rem;
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
            }
         `}</style>

         <style jsx global>{`
            * {
               box-sizing: border-box;
            }
         `}</style> */}
      </>
   );
}
