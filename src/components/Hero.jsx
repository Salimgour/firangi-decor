 function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/banner.png')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          𝙁𝙄𝙍𝘼𝙉𝙂𝙄 𝘿𝙀𝘾𝙊𝙍
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mb-8 leading-relaxed">
          Premium decorative products and artistic collections
          for modern spaces.
        </p>

        <a
          href="https://wa.me/917983752560"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Contact on WhatsApp
        </a>

      </div>

    </section>
  )
}

export default Hero