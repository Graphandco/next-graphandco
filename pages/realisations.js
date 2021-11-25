import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";

export async function getStaticProps() {
   const client = createClient({
      space: process.env.CONTENTUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
   });
   const res = await client.getEntries({ content_type: "realisations" });
   return {
      props: {
         realisations: res.items,
      },
   };
}

const Realisations = ({ realisations }) => {
   // console.log(realisations);
   return (
      <>
         <Head>
            <title>Graph and Co | Réalisations</title>
         </Head>
         {/* <div className="waves">
            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
            <div className="wave4"></div>
            <div className="wave5"></div>
         </div> */}
         <div className="container">
            <h1>Réalisations</h1>
            {/* <div className="realisations">
               {realisations.map((rea) => (
                  <Link
                     key={rea.sys.id}
                     href={"/realisations/" + rea.fields.slug}
                  >
                     <a
                        className={`realisations-card realisations-card-${rea.fields.slug}`}
                     >
                        <Image
                           src={"https:" + rea.fields.logo.fields.file.url}
                           width="200"
                           height="100"
                        />
                        <h3>{rea.fields.title}</h3>
                        <p>{rea.fields.description}</p>
                     </a>
                  </Link>
               ))}
            </div> */}
         </div>
      </>
   );
};

export default Realisations;
