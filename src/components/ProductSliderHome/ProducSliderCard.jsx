import './ProductSliderCard.css'
import { Link } from 'react-router-dom';

export default function ProductSliderCard({component}) {

    const {name, img, cost} = component
  
    return (
      <div className="containerProdCard">
        <img
          src={img[0]}
          alt={name}
          className="imgProdCard"
        />
        <Link style={{ textDecoration: 'none' }} to={'/products'}>
        <h3 className="sliderCardName">{name}</h3>
        <p className="sliderCardCost">{`$${cost}`}</p>
        </Link>
      </div>
    );
  }