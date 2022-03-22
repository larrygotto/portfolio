import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Feed } from "../pages/Feed"
import { LoginSignup } from "../pages/LoginSignup"
import { NotFound } from "../pages/NotFound"
import { Header } from "../components/Header"

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
