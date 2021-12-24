import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";

const Router = () => (
  <Routes>
    <Route path='*' element={<NotFound />} />
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/detalle/:id" element={<ProductDetail />}/>
  </Routes>
)

export default Router;
