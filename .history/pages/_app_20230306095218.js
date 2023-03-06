import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import en from '../i18n/en.json';
import fr from '../i18n/fr.json';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
s