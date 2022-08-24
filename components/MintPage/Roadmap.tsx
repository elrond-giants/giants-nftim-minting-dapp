export default function Roadmap() {
  return (
    <section className="py-20">
      <div className="container mx-auto mb-20 text-center">
        <p className="block text-base leading-relaxed text-amber-500 mb-2 font-bold">
          Roadmap
        </p>
        <h2 className="block tracking-normal font-bold text-slate-800 mb-4">
          Our Plans
        </h2>
        <p className="block antialiased text-lg font-normal leading-relaxed text-slate-700 mx-auto w-full px-4 md:w-10/12 lg:w-7/12 lg:px-8">
          This roadmap lets everyone know what we planned <br /> for the future of this project. Check it out!
        </p>
      </div>

      <div className="container mb-28 ">
        <div className="mt-8 mx-auto  flex flex-col ">
          <div className="lg:w-9/12 px-4 mx-auto">
            <ol className="relative border-l border-gray-200 xl:ml-48">
              <li className="mb-10 ml-14">
                <span className="flex absolute -left-5 justify-center items-center h-10 w-10 place-items-center rounded-full bg-amber-100/80  text-amber-500 ring-8 ring-amber-100/40">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-2 pt-2 text-xl font-semibold text-slate-800 tracking-normal">
                  Research
                  <span className="bg-gradient-to-tl from-green-600 to-green-300 shadow-soft-sm text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-xl ml-3">
                    Latest
                  </span>
                </h3>
                <time className="block mb-5 text-sm font-normal leading-none text-slate-400">
                  Starts on 1st January 2023
                </time>
                <p className="mb-4 text-base font-normal text-slate-600">
                  Includes the planning for NFTs design, strategic planning, and marketing materials.
                </p>
              </li>
              <li className="mb-10 ml-14">
                <span className="flex absolute -left-5 justify-center items-center h-10 w-10 place-items-center rounded-full bg-amber-100/80  text-amber-500 ring-8 ring-amber-100/40">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-2 pt-2 text-xl font-semibold text-slate-800 tracking-normal">
                  NFTs Launch
                </h3>
                <time className="block mb-5 text-sm font-normal leading-none text-slate-400">
                  Starts on 1st February 2023
                </time>
                <p className="text-base font-normal text-slate-600">
                  Includes giving access to NFTs holders on our dApp.
                </p>
              </li>
              <li className="ml-14">
                <span className="flex absolute -left-5 justify-center items-center h-10 w-10 place-items-center rounded-full bg-amber-100/80  text-amber-500 ring-8 ring-amber-100/40">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-2 pt-2 text-xl font-semibold text-slate-800 tracking-normal">
                  Getting Benefits
                </h3>
                <time className="block mb-5 leading-none text-sm text-slate-400">
                  Starts in 1st March 2023
                </time>
                <p className=" font-normal text-slate-600">
                  Includes contests and community prizes.
                </p>
                                <a
                  href="#"
                  className="leading-pro hover:scale-102 hover:shadow-soft-xs border-slate-400 border active:opacity-85 ease-soft-in text-xs tracking-tight-soft bg-150 bg-x-25 rounded-3.5xl mb-0 inline-block cursor-pointer bg-transparent mr-1 px-8 py-2 text-center align-middle font-bold uppercase text-slate-700 transition-all"
                >
                  <svg
                    className="mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Mystery Box
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}