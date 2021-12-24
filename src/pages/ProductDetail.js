import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/detalle.css';
import { RiShoppingCart2Line } from "react-icons/ri"

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(async ()=>{
    await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => setProduct(res.data))
  },[]);
  return(
    <section className="detail">
      <div className="detail__image">
        <img className="detail__image--img" src={product.image} alt={product.title}/>
      </div>
      <div className="detail__info">
        <div className="detail__info--category">
          {product.category}
        </div>
        <div className="detail__info--title">
          {product.title}
        </div>
        <div className="detail__info--description">
          {product.description}
        </div>
        <div className="detail__buy">
          <div className="detail__buy--price">
            {product.price? product.price.toFixed(2): "0.00"}
          </div>
          <button className="detail__buy--button" type="button">
            <RiShoppingCart2Line />
            Comprar
          </button>
        </div>
      </div>
    </section>)
}

export default ProductDetail
