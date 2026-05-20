 import { useEffect, useState } from "react"
import axios from "axios"

function Gallery() {

  const [products, setProducts] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {

    axios.get(" https://firangidecor-backend.onrender.com")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  return (
    <section className="py-16 px-6 bg-gray-100 min-h-screen">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Collection
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => setSelectedImage(product.imageUrl)}
          >

            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-4">

              <h3 className="text-xl font-semibold mb-2">
                {product.title}
              </h3>

              <p className="text-gray-600 mb-2">
                {product.description}
              </p>

              <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
                {product.category}
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* Fullscreen Preview */}
      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />

        </div>

      )}

    </section>
  )
}

export default Gallery