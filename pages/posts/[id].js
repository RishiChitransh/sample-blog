import Layout from '../../components/layout';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import strapi from "../../lib/strapi";
import ReactMarkdown from "react-markdown";

export async function getServerSideProps({ params }) {
  const article = await strapi.find("articles/"+params.id+"?populate=*");

  return {
    props: {
      article,
    },
  };
} 


export default function Post({ article }) {

  const details = article.data.attributes;

  let imageElement = null;
  if (details.image.data != null) {
    let imageSrc = "http://127.0.0.1:1337"+details.image.data.attributes.url;
    imageElement = <img src={imageSrc} height={200} width={500}/>;
  }

  return (
    <Layout>
      <Head>
        <title>{details.title}</title>
      </Head>
      <article>    
       {imageElement}
        <h1 className={utilStyles.headingXl}>{details.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={details.publishedAt} />
        </div>
        <div style={{ textAlign: "left", paddingLeft: "50px"}}>
          <ReactMarkdown children={ details.content }/>
        </div>
      </article>
    </Layout>
  );
}