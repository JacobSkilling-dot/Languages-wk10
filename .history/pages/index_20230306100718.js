import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'

export default function Home({dir}) {

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title"})
  const description = intl.formatMessage({id: "page.home.head.meta.description"})
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" href/>
      </Head>
      <main className={styles.main}>
        
      </main>
    </>
  )
}
