export default function Carousel() {
  const images = [
    {
      image: "url('https://images.unsplash.com/photo-1638957319391-9b81b996afca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')",
      number: 12445
    },
    {
      image: "url('https://images.unsplash.com/photo-1640379878948-72b9db349e17?ixlib=rb-1.2.1&ixid=MnwxM[…]G90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')",
      number: 23311
    },
    {
      image: "url('https://images.unsplash.com/photo-1639738415512-1f122497ef9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')",
      number: 12422
    },
    {
      image: "url('https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')",
      number: 3421
    },
    {
      image: "url('https://images.unsplash.com/photo-1647021038407-fca3bfd3bf0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')",
      number: 1223
    },
    {
      image: "url('https://images.unsplash.com/photo-1639503611585-1054af5dbfab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')",
      number: 7584
    }
  ]

  return (
    <>
      <div className="container mx-auto mb-20 text-center">
        <p className="block text-base leading-relaxed text-amber-500 mb-2 font-bold">
          Discover NFTs
        </p>
        <h2 className="block tracking-normal font-bold text-slate-800 mb-4">
          See Minted NFTs
        </h2>
        <p className="block antialiased text-lg font-normal leading-relaxed text-slate-600 mx-auto w-full px-4 md:w-10/12 lg:w-7/12 lg:px-8">
          In this section you can explore other NFTs.
        </p>
      </div>
      <div className="container mb-32 mx-auto w-full overflow-hidden p-0 relative">
        <div className="w-full h-full absolute">
          <div
            className="w-1/4 h-full absolute z-50 left-0"
            style={{
              background:
                "linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%)"
            }}
          />
          <div
            className="w-1/4 h-full absolute z-50 right-0"
            style={{
              background:
                "linear-gradient(to left, #fff 0%, rgba(255, 255, 255, 0) 100%)"
            }}
          />
        </div>
        <div
          className="carousel-items flex items-center justify-center"
          style={{
            width: "fit-content",
            animation: 'carouselAnim 10s infinite alternate linear'
          }}
        >
          {images.map((data) => {
            return (
              <div
                key={data.image}
                className="carousel-focus flex items-center justify-end flex-col relative bg-white mx-5 p-4 mb-4 overflow-hidden rounded-2xl shadow-soft-lg"
                style={{ 
                  width: 300,
                  height: 300,
                  backgroundImage: data.image,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="mt-3 mb-0 p-3 text-white font-semibold backdrop-blur-md rounded-lg border border-white/20 bg-white/10 w-full">
                  NFT #{data.number}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}