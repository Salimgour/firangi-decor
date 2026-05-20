import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const response = await axios.post(
        " https://firangidecor-backend.onrender.com",
        {
          username,
          password
        }
      )

      const token = response.data.token

      localStorage.setItem("token", token)

      alert("Login Successful")

      navigate("/admin")

    } catch (error) {

      console.log(error)

      alert("Invalid Credentials")
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 border rounded-xl"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login