import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date';
import AddEntry from '../components/addentry';
import axios from "axios";
import strapi from "../lib/strapi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export async function getServerSideProps() {
  const articles = await strapi.find("articles");

  return {
    props: {
      articles,
    },
  };
} 

export default function Home({ articles}) {

  //const allPostsData = callAtServer();
  if(!articles) return <div> Loading.... </div>

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <h2>Get started by visiting some of our most popular posts!</h2>
          
      </section>
      <section className={`${utilStyles.headingMd}`} style={{ paddingLeft: "250px"}}>
        <div className={styles.grid}>
         
          {articles.data.map((article) => (

            <Link href={`/posts/${article.id}`} key={article.id} className={styles.card}>
              <h3>{article.attributes.title} &rarr;</h3>
              <small className={utilStyles.lightText}>
                <Date dateString={article.attributes.publishedAt} />
              </small>
              <p>{article.attributes.preview}</p>
            </Link>
          ))}           
        </div>
      </section>
      </Layout>
  )
}
