import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDeatailContainer from "./components/ItemDeatailContainer.js";
import NavBar from "./components/NavBar.js";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/categoria/:idArea" element={<ItemListContainer/>}></Route>
          <Route path="/item/:idItem" element={<ItemDeatailContainer/>}></Route>
          <Route path="/nosotros" element={<h1>Mundo</h1>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App;