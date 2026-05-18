 import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import GalleryPage from "./pages/GalleryPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App