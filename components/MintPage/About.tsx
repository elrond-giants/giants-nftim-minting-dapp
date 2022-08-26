export default function About() {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto mb-20 text-center">
        <p className="block text-base leading-relaxed text-amber-500 mb-2 font-bold">About Us</p>
        <h2 className="block tracking-normal font-bold text-slate-800 mb-4">What are our NFTs?</h2>
        <p className="block antialiased text-lg font-normal leading-relaxed text-slate-600 mx-auto w-full px-4 md:w-10/12 lg:w-7/12 lg:px-8">
          10,000 unique NFTs collection based on Elrond will drive your Metaverse journey. Let&apos;s join forces and
          take the benefits!
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid justify-center text-center">
          <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-amber-100/80 p-2.5 text-amber-500 ring-8 ring-amber-100/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h5 className="block tracking-normal  text-xl leading-snug text-slate-800 font-semibold">
            Access to our dApp
          </h5>
          <p className="block antialiased  text-base leading-relaxed text-slate-600 px-8 font-normal">
            Join us and you will have access to our dApp. Using it, you will access easier your NFTs and details.
          </p>
        </div>
        <div className="grid justify-center text-center">
          <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-amber-100/80 p-2.5 text-amber-500 ring-8 ring-amber-100/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <h5 className="block antialiased tracking-normal  text-xl leading-snug text-slate-800 font-semibold">
            Weekly Contests
          </h5>
          <p className="block antialiased  text-base leading-relaxed text-slate-600 px-8 font-normal">
            Through your NFT you will be able to join our contests and take advantage of weekly prizes: Air Drops, eGLD,
            and others.
          </p>
        </div>
        <div className="grid justify-center text-center">
          <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-amber-100/80 p-2.5 text-amber-500 ring-8 ring-amber-100/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h5 className="block antialiased tracking-normal  text-xl leading-snug text-slate-800 font-semibold">
            Build A Better World
          </h5>
          <p className="block antialiased  text-base leading-relaxed text-slate-600 px-8 font-normal">
            Every NFT bought means another tree planted. Soon a planting trees session will start and you will be able
            to join us.
          </p>
        </div>
      </div>
    </section>
  );
}
