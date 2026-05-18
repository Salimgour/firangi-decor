 import { useState } from "react"

const images = Array.from(
  { length: 132 },
  (_, index) => `/images/lav32 (${index + 1}).jpeg`
)

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section
      id="gallery"
      className="py-16 px-6 bg-white min-h-screen"
    >

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Collection
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"
            onClick={() => setSelectedImage(image)}
          >

            <img
              src={image}
              alt={`gallery-${index}`}
              className="w-full h-72 object-cover"
            />

          </div>
        ))}

      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="preview"
            className="max-w-full max-h-full rounded-xl"
          />

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

        </div>

      )}

    </section>
  )
}

export default Gallery