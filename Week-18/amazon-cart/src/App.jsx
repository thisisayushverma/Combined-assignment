import { Routes, Route } from "react-router-dom"
import  AmazonStyleCart from "./components/AmazonStyleCart.jsx"
import WishList from "./components/WishList.jsx"
import './App.css'


export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<WishList />} />
      <Route path="/cart" element={<AmazonStyleCart />} />
    </Routes>

  )
}

export default App
