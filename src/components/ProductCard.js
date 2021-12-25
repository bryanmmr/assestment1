import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const toTime = (coutdown) => {
  const hours = Math.floor(coutdown / 3600);
  const minutes = Math.floor((coutdown - (hours * 3600)) / 60);
  const seconds = coutdown - (hours * 3600) - (minutes * 60);
  return (`s
    ${hours.toLocaleString('us-US', { minimumIntegerDigits: 2 })} :
    ${minutes.toLocaleString('us-US', { minimumIntegerDigits: 2 })} :
    ${seconds.toLocaleString('us-US', { minimumIntegerDigits: 2 })}
  `);
}

const ProductCard = ({ data }) => {
  const random = Math.floor((Math.random() * 1000 + 1));
  const [countdown, setCountDown] = useState(random);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
     countdown > 0 && setTimeout(() => setCountDown(countdown - 1), 1000);
  }, [countdown])
  const navigate = useNavigate();
  return(
    <div className="product__card" key={data.id}>
      <div className="product__card--image">
        <img className="product--image" src={data.image} alt={data.title} />
      </div>
      <div className="product--title" title={data.title}>{data.title}</div>
      <div className="product--price">{data.price.toFixed(2)}</div>
      <div className="product__detail">
        <h4 className="product__detail--time"> {toTime(parseInt(countdown, 10))} </h4>
        <button
          className="product__detail--button"
          type="button"
          disabled={!countdown}
          onClick={()=>navigate(`/detalle/${data.id}`)}>
            Detalle
        </button>
      </div>
    </div>
)}

export default ProductCard

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

ProductCard.defaultProps = {
  data: { id: 0, image : '', title: '', price: 0 }
}
