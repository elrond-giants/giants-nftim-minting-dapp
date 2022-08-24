import '../styles/globals.css'
import "../styles/loading-dot.css";
import type {AppProps} from 'next/app'
import store from "../redux/store";
import {Provider as ReduxProvider} from "react-redux";
import Notifications from "../components/Notifications";
import {AuthContextProvider} from "@elrond-giants/erd-react-hooks";
import Script from 'next/script';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <ReduxProvider store={store}>
                <AuthContextProvider env={process.env.NODE_ENV === "production" ? "mainnet" : "devnet"}>
                    <Component {...pageProps} />
                    <Notifications/>
                </AuthContextProvider>
            </ReduxProvider>
            <Script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></Script>
        </>
    );
}

export default MyApp
