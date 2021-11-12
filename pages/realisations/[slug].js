import Head from "next/head";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";

const client = createClient({
   space: process.env.CONTENTUL_SPACE_ID,
   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
   const res = await client.getEntries({
      content_type: "realisations",
   });

   const paths = res.items.map((item) => {
      return {
         params: { slug: item.fields.slug },
      };
   });

   return {
      paths,
      fallback: false,
   };
};

export async function getStaticProps({ params }) {
   const { items } = await client.getEntries({
      content_type: "realisations",
      "fields.slug": params.slug,
   });

   return {
      props: { realisations: items[0] },
   };
}

export default function Realisation({ realisations }) {
   const { title, description } = realisations.fields;
   console.log(realisations.fields.featured);

   return (
      <>
         <Head>
            <title>Graph and Co | {title}</title>
         </Head>
         <section className="single-tip">
            <div className="container">
               <Link href={"/realisations"}>
                  <a className="back">Retour à la liste</a>
               </Link>
               <Image
                  src={"https:" + realisations.fields.featured.fields.file.url}
                  width={
                     realisations.fields.featured.fields.file.details.image
                        .width
                  }
                  height={
                     realisations.fields.featured.fields.file.details.image
                        .height
                  }
               />
               <h2>{title}</h2>
               <p>{description}</p>
            </div>
         </section>
      </>
   );
}
