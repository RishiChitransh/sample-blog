/*import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

import AddEntry from '../components/addentry';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const name = 'My Blog'
export const siteTitle = 'Sample Blog Site'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Creating a bare bones Blog with Next.JS & Strapi"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
          <div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <Popup trigger={<button> Add Entry </button>} 
             position="right center">
              <AddEntry/>
            </Popup>
          </div>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
} */
// import custom components
import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";
import Link from 'next/link'
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'My Blog'
export const siteTitle = 'Sample Blog Site'

export default function Layout({ children , home}) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row",
    textAlign: "center"
  };

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Creating a bare bones Blog with Next.JS & Strapi"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    
      <Header />
      <main style={styles}>
        <section style={{ width: "90%" }}>{children}</section>
        <SideBar />
      </main>
      {!home && (
        <div className={styles.backToHome} style={{ paddingTop: "30px", paddingLeft: "50px"}}>
          <Link href="/"><h3 style={{  textDecoration: "underline"}}>← Back to home</h3></Link>
        </div>
      )}
      <Footer />
    </>
  );
}