 import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg">

      <h1 className="text-2xl font-bold">
         𝙁𝙄𝙍𝘼𝙉𝙂𝙄 𝘿𝙀𝘾𝙊𝙍
      </h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
      </div>

    </nav>
  )
}

export default Navbar