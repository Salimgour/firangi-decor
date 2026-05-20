 import { useState, useEffect } from "react"
import axios from "axios"

function Admin() {

  const API =
    "https://firangidecor-backend.onrender.com"

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [file, setFile] = useState(null)

  const [products, setProducts] = useState([])

  const [editingProduct, setEditingProduct] = useState(null)

  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editCategory, setEditCategory] = useState("")

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const response = await axios.get(
        `${API}/products`
      )

      setProducts(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  // LOAD PRODUCTS
   useEffect(() => {

  const loadProducts = async () => {

    await fetchProducts()

  }

  loadProducts()

}, [])

  // DELETE PRODUCT
  const deleteProduct = async (id) => {

    try {

      await axios.delete(
        `${API}/products/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`
          }
        }
      )

      alert("Product Deleted Successfully")

      fetchProducts()

    } catch (error) {

      console.log(error)

      alert("Delete Failed")
    }
  }

  // START EDIT
  const startEdit = (product) => {

    setEditingProduct(product)

    setEditTitle(product.title)

    setEditDescription(product.description)

    setEditCategory(product.category)
  }

  // UPDATE PRODUCT
  const updateProduct = async () => {

    try {

      const updatedData = {
        title: editTitle,
        description: editDescription,
        category: editCategory,
        imageUrl: editingProduct.imageUrl
      }

      await axios.put(
        `${API}/products/${editingProduct.id}`,
        updatedData,
        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`
          }
        }
      )

      alert("Product Updated Successfully")

      setEditingProduct(null)

      fetchProducts()

    } catch (error) {

      console.log(error)

      alert("Update Failed")
    }
  }

  // ADD PRODUCT
  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const formData = new FormData()

      formData.append("file", file)

      const uploadResponse = await axios.post(
        `${API}/cloudinary/upload`,
        formData
      )

      const imageUrl = uploadResponse.data

      const productData = {
        title,
        description,
        category,
        imageUrl
      }

      await axios.post(
        `${API}/products`,
        productData,
        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`
          }
        }
      )

      alert("Product Added Successfully")

      setTitle("")
      setDescription("")
      setCategory("")
      setFile(null)

      fetchProducts()

    } catch (error) {

      console.log(error)

      alert("Error adding product")
    }
  }

  return (

    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          Admin Panel
        </h1>

        <ul className="space-y-6 text-lg">

          <li>Dashboard</li>

          <li>Add Product</li>

          <li>Manage Products</li>

          <li
            className="text-red-400 cursor-pointer"
            onClick={() => {

              localStorage.removeItem("token")

              window.location.href = "/login"
            }}
          >
            Logout
          </li>

        </ul>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h2 className="text-4xl font-bold mb-8">
          Add New Product
        </h2>

        {/* ADD PRODUCT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mb-12">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Product Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 border rounded-xl"
              required
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 border rounded-xl"
              required
            ></textarea>

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-4 border rounded-xl"
              required
            />

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full"
              required
            />

            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-xl"
            >
              Upload Product
            </button>

          </form>

        </div>

        {/* PRODUCTS */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Manage Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >

                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-2xl font-semibold mb-2">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>

                  <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm mb-4">
                    {product.category}
                  </span>

                  <div className="flex gap-4">

                    <button
                      onClick={() => startEdit(product)}
                      className="flex-1 bg-blue-500 text-white py-3 rounded-xl"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="flex-1 bg-red-500 text-white py-3 rounded-xl"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* EDIT MODAL */}
        {editingProduct && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

            <div className="bg-white p-8 rounded-2xl w-full max-w-xl">

              <h2 className="text-3xl font-bold mb-6">
                Edit Product
              </h2>

              <div className="space-y-5">

                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) =>
                    setEditTitle(e.target.value)
                  }
                  className="w-full p-4 border rounded-xl"
                />

                <textarea
                  value={editDescription}
                  onChange={(e) =>
                    setEditDescription(e.target.value)
                  }
                  className="w-full p-4 border rounded-xl"
                ></textarea>

                <input
                  type="text"
                  value={editCategory}
                  onChange={(e) =>
                    setEditCategory(e.target.value)
                  }
                  className="w-full p-4 border rounded-xl"
                />

                <div className="flex gap-4">

                  <button
                    onClick={updateProduct}
                    className="flex-1 bg-black text-white py-4 rounded-xl"
                  >
                    Save Changes
                  </button>

                  <button
                    onClick={() =>
                      setEditingProduct(null)
                    }
                    className="flex-1 bg-gray-300 py-4 rounded-xl"
                  >
                    Cancel
                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default Admin