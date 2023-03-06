import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
