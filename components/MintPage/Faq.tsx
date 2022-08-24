import React, { useState } from 'react';

export default function Faq() {
  const [active, setActive] = useState({
    activeIndex: 0,
    status: false
  });

  const QA = [
    { question: 'What are NFTs ?', answer: 'A non-fungible token is a financial security consisting of digital data stored in a blockchain, a form of distributed ledger.' },
    { question: 'When will be the Minting Day ?', answer: 'The minting day will on 3rd December.' },
    { question: 'How much is an NFT? ', answer: 'The cost of an NFT is 1 EGLD' },
    { question: 'What is your Twitter Official Account ?', answer: 'Our official twitter account is visible our discord server.' },
  ]

  return (
    <>
      <div className="mx-auto text-center px-4 mt-12 text-4xl text-slate-700 font-semibold">
        Frequently Asked Questions
      </div>
      <div className="container mb-28 ">
        <div className="mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg flex flex-col lg:flex-row lg:flex-wrap">
          <div className="lg:w-9/12 px-4 mx-auto">
            {QA.map((data:any , i: any) => {
              return (
                <div 
                  key={i}
                  className={`cursor-pointer transition-all duration-150 flex flex-col items-center ease-linear ${i + 1 === QA.length ? "" : "border-b"}  px-6 py-6`} 
                  onClick={() => {
                    setActive({
                      activeIndex: i,
                      status: i === active.activeIndex ? !active.status : true
                    });
                  }}
                  >
                  <div className="flex items-center justify-between w-full">
                    <div className="text-slate-700 font-semibold text-lg">
                      {data.question}
                    </div>
                    <div>
                      <svg
                        fill="currentColor"
                        className={`${active.status && i === active.activeIndex ? 'hidden' : ''} question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-100 rounded-full p-1`}
                        viewBox="0 0 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="currentColor"
                          strokeWidth={1}
                          fill="currentColor"
                          fillRule="evenodd"
                        >
                          <g>
                            <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8" />
                          </g>
                        </g>
                      </svg>
                      <svg
                        fill="currentColor"
                        className={`${active.status && i === active.activeIndex ? '' : 'hidden'} question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-100 rounded-full p-1`}
                        viewBox="0 0 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="currentColor"
                          strokeWidth={1}
                          fill="currentColor"
                          fillRule="evenodd"
                        >
                          <g>
                            <polygon points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className={`${active.status && i === active.activeIndex ? 'opacity-1 mt-4' : 'opacity-0 h-0'} duration-150 ease-linear text-slate-600 w-full`}>
                    {data.answer}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}