 function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/banner.png')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-4xl md:text-7xl font-bold mb-6">
           𝙁𝙄𝙍𝘼𝙉𝙂𝙄 𝘿𝙀𝘾𝙊𝙍
        </h1>

        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          Premium decorative products and artistic collections for modern spaces.
        </p>

        <a
          href="https://wa.me/917983752560"
          target="_blank"
          className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact on WhatsApp
        </a>

      </div>

    </section>
  )
}

export default Hero