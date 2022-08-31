import '../styles/globals.css';
import '../styles/loading-dot.css';

import { AuthContextProvider } from '@elrond-giants/erd-react-hooks';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { Provider as ReduxProvider } from 'react-redux';

import Notifications from '../components/Notifications';
import { isDemo } from '../config';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Minting dApp Template by Giants & Creative Tim"
        description="This template can be used as a starting point for any minting dApp on the Elrond Network. It offers authentication with Maiar App, Web Wallet, Extension, and Ledger. It also includes methods to easily sign and make transactions, query smart contracts, and a few utility methods."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://mint-demo.elrondgiants.com/",
          images: [
            {
              url: "https://mint-demo.elrondgiants.com/social.jpg",
              width: 1012,
              height: 506,
              alt: "Giants & Creative Tim Minting dApp",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          handle: "@ElrondGiants",
          cardType: "summary_large_image",
        }}
      />
      <ReduxProvider store={store}>
        <AuthContextProvider env={process?.env?.NODE_ENV === "production" && !isDemo ? "mainnet" : "devnet"}>
          <Component {...pageProps} />
          <Notifications />
        </AuthContextProvider>
      </ReduxProvider>
      <Script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></Script>
    </>
  );
}

export default MyApp;
