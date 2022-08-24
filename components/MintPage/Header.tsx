import { useAuth, useTransaction } from '@elrond-giants/erd-react-hooks/dist';
import { ITransactionProps } from '@elrond-giants/erd-react-hooks/dist/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { contractAddress } from '../../config';
import { getCollectionSize, getTotalTokensLeft } from '../../utils/contractQueries';
import { authPath } from '../../utils/routes';

export default function Header() {
  const { authenticated } = useAuth();
  const { makeTransaction } = useTransaction();
  const [mintNumber, setMintNumber] = useState(1);
  const [activeIndex, setActiveIndex] = useState(2);

  const [minted, setMinted] = useState(0);
  const [collectionSize, setCollectionSize] = useState(0);

  const images = [
    {
      link:
        "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      coverLink: "/bg-ghost-2.jpg",
    },
    {
      link:
        "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      coverLink: "/bg-ghost-1.jpg",
    },
    {
      link: "/nft-1.jpg",
      coverLink:
        "https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
  ];
  const [activeImage, setActiveImage] = useState(images[2].coverLink);

  const changeActiveImage = (data: any) => {
    setActiveImage(data);
  };

  useEffect(() => {
    (async () => {
      const tokensLeft = await getTotalTokensLeft();
      const collectionSize = await getCollectionSize();
      const minted = collectionSize - tokensLeft;
      setMinted(minted);
      setCollectionSize(collectionSize);
    })();
  }, []);

  const mintNft = async () => {
    const txData: ITransactionProps = {
      receiver: contractAddress as string,
      data: "mint@01",
      gasLimit: 13_000_000,
      value: 0.01,
    };

    await makeTransaction(txData);
  };

  return (
    <>
      <section>
        <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
          <div className="container z-10">
            <div className="flex flex-wrap mt-0 -mx-3">
              <div className="flex flex-col w-full max-w-full px-3 ml-10 md:flex-0 shrink-0 md:w-10/12 xl:w-4/12">
                <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                  <div className=" pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                    <h1 className="text-slate-800">Get Ready to Buy</h1>
                    <h1 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-amber-600 to-yellow-400 bg-clip-text">
                      Awesome NFTs
                    </h1>
                    <p className="mb-0 mt-5 text-slate-600 text-lg">
                      The awesome collection from <br /> Elrond Blockchain.
                    </p>
                  </div>
                  <div className="flex-auto px-0 mt-5">
                    <p className="mt-2 mb-0 font- text-slate-600">Minted until now</p>
                    <h3>
                      {minted} <span className="font-light text-slate-600">/</span> {collectionSize}
                    </h3>
                  </div>
                  <div className="px-2">
                    <div className="flex flex-wrap mt-0 -mx-3">
                      <div className="max-w-full pr-4 mt-5">
                        <input
                          type="number"
                          value={mintNumber}
                          min={1}
                          max={10}
                          onChange={(e) => setMintNumber(parseInt(e.target.value, 10))}
                          className="rounded-full focus:shadow-soft-primary-outline text-sm w-20 leading-5.6 ease-soft block w-full appearance-none border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                        />
                      </div>

                      <div className="max-w-full text-start mt-5">
                        {authenticated ? (
                          <button
                            className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-3.5xl cursor-pointer bg-gradient-to-tl from-gray-900 to-slate-800 text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
                            onClick={mintNft}
                          >
                            Mint Now
                          </button>
                        ) : (
                          <button className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-3.5xl cursor-pointer bg-gradient-to-tl from-gray-900 to-slate-800 text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">
                            <Link href={authPath}>Connect to Mint</Link>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full ml-auto mr-6 px-3 lg:flex-0 shrink-0 md:w-12/12 xl:w-7/12">
                <div className="mt-28 mb-10 md:mb-0 relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border overflow-hidden">
                  <img src={activeImage} alt="" />
                  <div className="md:absolute bottom-0 bg-white/10 backdrop-blur-md w-full md:h-30 border-t border-white/50">
                    <div className="flex flex-wrap h-full py-4 md:py-0">
                      <div className="px-3 lg:flex-0 shrink-0 md:w-6/12 flex flex-col justify-center">
                        <div className="flex items-center">
                          <h4 className="md:text-white mr-2 mb-1">Demo</h4>
                          <i className="fas fa-check-circle text-lg text-cyan-400"></i>
                        </div>

                        <div className="text-slate-700 md:text-white flex">
                          <div className="mr-2">
                            Price: <strong>0.01 EGLD</strong>
                          </div>{" "}
                          |
                          <div className="ml-2">
                            Floor Price: <strong>0.5 EGLD</strong>
                          </div>
                        </div>
                      </div>

                      <div className="px-3 lg:flex-0 shrink-0 md:w-6/12 pt-7 md:pt-0">
                        <div className="flex flex-wrap h-full mb-3 md:mb-0">
                          {images.map((data: any, i: any) => {
                            return (
                              <div className="px-1 md:w-4/12 overflow-hidden flex items-center" key={data.link}>
                                <img
                                  className={`w-24 md:w-full rounded-xl shadow-soft-xs ${i !== activeIndex &&
                                    "opacity-50"}  hover:opacity-100 transition-all cursor-pointer ease-soft-in`}
                                  src={data.link}
                                  onClick={() => {
                                    changeActiveImage(data.coverLink);
                                    setActiveIndex(i);
                                  }}
                                  alt={`image-${i}`}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
