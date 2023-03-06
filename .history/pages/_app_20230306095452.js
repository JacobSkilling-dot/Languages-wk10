import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import en from '../i18n/en.json';
import fr from '../i18n/fr.json';

const message = {
  en,
  fr
}

function getDirection(locale) {
  return "litr";
}


export default function App({ Component, pageProps }) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
  <Component {...pageProps} dir={getDirection(locale)}/>
  </IntlProvider>
  )
}
