import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/detalle.css';

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(async ()=>{
    await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => setProduct(res.data))
  },[]);
  return(
    <div className="detail">
      {product.title}
    </div>)
}

export default ProductDetail
