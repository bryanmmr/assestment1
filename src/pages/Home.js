import { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "../components/ProductCard";
import '../styles/home.css';

const Home = () => {
  const [productData, setProductData] = useState([])
  useEffect(async ()=> {
    await axios.get('https://fakestoreapi.com/products')
      .then(res => setProductData(res.data))
  })
  return (
    <div className="home">
      <h2>Productos</h2>
      <div className="product__container">
        {productData.map(data => (
          <ProductCard data={data} key={data.id}/>
        ))}
      </div>
    </div>
)}

export default Home
