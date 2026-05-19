 import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import GalleryPage from "./pages/GalleryPage"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/login" element={<Login />} />

         <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>

  )
}

export default App