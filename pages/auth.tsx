import { useAuth } from '@elrond-giants/erd-react-hooks';
import { AuthProviderType } from '@elrond-giants/erdjs-auth/dist/types';
import { useRouter } from 'next/router';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import MaiarLoginPopup from '../components/MaiarLoginPopup';
import Navbar from '../components/Navbar';
import * as config from '../config';
import { homePath } from '../utils/routes';

import type {NextPage} from 'next'
import { isDemo } from '../config';
// @ts-ignore

const Auth: NextPage = () => {
    const {authenticated, login, getLedgerAccounts} = useAuth();
    const router = useRouter();
    const [maiarAuthUri, setMaiarAuthUri] = useState('');
    const [authQrCode, setAuthQrCode] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [ledgerAccounts, setLedgerAccounts] = useState<string[]>([]);

    useEffect(() => {
        setShowPopup(!!(authQrCode && isPopupOpen));
    }, [authQrCode, isPopupOpen])

    useEffect(() => {
        if (!authenticated) {
            return;
        }

        (async () => {
            await router.replace(homePath);
        })();

    }, [router, authenticated]);

    const maiarClickHandler = async () => {
        const uri = await login(AuthProviderType.MAIAR);
        const qrCode = await QRCode.toString(uri, {type: "svg"});
        const authUri = `${config.walletConnectDeepLink}?wallet-connect=${encodeURIComponent(uri)}`;
        setAuthQrCode(qrCode);
        setMaiarAuthUri(authUri);
        setIsPopupOpen(true);
    };

    const webClickHandler = async () => {
        await login(AuthProviderType.WEBWALLET);
    };

    const extensionClickHandler = async () => {
        await login(AuthProviderType.EXTENSION);
    }

    const ledgerClickHandler = async () => {
        const accounts = await getLedgerAccounts();
        setLedgerAccounts(accounts);
    }

    const loginWithLedger = async (accountIndex: number) => {
        await login(AuthProviderType.LEDGER, {ledgerAccountIndex: accountIndex});
    }

    return (
        <>
            <Navbar />
            <section>
                <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
                    <div className="container z-10">
                        <div className="flex flex-wrap mt-0 -mx-3">
                            <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                                <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                    <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                                        <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
                                            Welcome!
                                        </h3>
                                        <p className="mb-0 text-slate-700">Choose your provider to connect</p>
                                    </div>
                                    <div className="flex-auto p-6">
                                        <div className="text-center">
                                            <button
                                                type="button"
                                                className="flex items-center w-full px-6 py-3 mr-3 font-bold text-left uppercase align-middle transition-all bg-transparent border rounded-3.5xl cursor-pointer border-slate-400 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-slate-700"
                                                onClick={maiarClickHandler}
                                            >
                                                <img src="login/maiar.svg" className="mr-2 w-5 h-4" />
                                                Maiar
                                            </button>
                                            <button
                                                type="button"
                                                className="flex items-center w-full px-6 py-3 mr-3 mt-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-3.5xl cursor-pointer border-slate-400 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-slate-700"
                                                onClick={webClickHandler}
                                            >   
                                                <img src="login/web.svg" className="mr-2 w-5 h-4" />
                                                Web Wallet
                                            </button>
                                            <button
                                                type="button"
                                                className="flex items-center w-full px-6 py-3 mr-3 mt-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-3.5xl cursor-pointer border-slate-400 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-slate-700"
                                                onClick={extensionClickHandler}
                                            >
                                                <img src="login/defi.svg" className="mr-2 w-5 h-4" />
                                                Extension
                                            </button>
                                            <button
                                                type="button"
                                                className="flex items-center w-full px-6 py-3 mr-3 mt-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-3.5xl cursor-pointer border-slate-400 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-slate-700"
                                                onClick={ledgerClickHandler}
                                            >
                                                <img src="login/ledger.svg" className="mr-2 w-5 h-4" />
                                                Ledger
                                            </button>
                                        </div>
                                        {ledgerAccounts.length > 0 && <div className="flex items-center">
                                            <span>Select ledger account</span>
                                            <select
                                                className="m-10"
                                                onChange={(e) => loginWithLedger(parseInt(e.target.value))}
                                            >
                                                {ledgerAccounts.map((account, index) => (
                                                    <option key={account} value={index}>{account}</option>
                                                ))}
                                            </select>
                                        </div>
                                        }

                                        <MaiarLoginPopup qrCode={authQrCode} uri={maiarAuthUri} open={showPopup} setOpen={setIsPopupOpen}/>
                                    </div>
                                    <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                    <p className="mx-auto mb-6 leading-normal text-sm text-slate-700">
                                        Don&apos;t have an Elrond wallet?
                                        <a
                                        href="https://wallet.elrond.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text ml-1"
                                        >
                                        Create Wallet
                                        </a>
                                    </p>
                                    {isDemo && <p className="mx-auto mb-6 leading-normal text-sm text-slate-700 font-bold">
                                        This Demo is running on Devnet
                                    </p>}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                                <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                                    <div
                                    className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10"
                                    style={{
                                        backgroundImage:
                                        'url("/bg-auth.jpg")'
                                    }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>     
            <Footer />       
        </>
    );
}

export default Auth
