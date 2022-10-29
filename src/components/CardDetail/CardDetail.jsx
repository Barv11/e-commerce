import React, { useState, useEffect } from "react";
import s from "./CardDetail.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Especificaciones from "./Especificaciones/Especificaciones";
import { clearProducts, searchProductById, searchProductByName } from "../../redux/actions";
import Navbar from "../Navbar/Navbar";

export default function CardDetail() {
  const { id } = useParams();
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const searchByIdProduct = useSelector((state) => state.searchByIdProduct);
  
  useEffect(() => {
    dispatch(searchProductById(id));
  }, [dispatch]);

  useEffect(() => {
      setImage(img);
  }, [searchByIdProduct]);

  useEffect(() => {
    return dispatch(clearProducts())
  }, [])

  const { name, brand, img, detail, cost } = searchByIdProduct;

  const handleOnClick = (e) => {
    setImage(e.target.src);
  };

  console.log(searchByIdProduct.img);
  return (
    <React.Fragment>
      <Navbar />
      {Object.entries(searchByIdProduct).length === 0 ? (
        "Loading..."
      ) : (
        <main>
          <div className={s.container}>
            <div className={s.carrousel}>
              <div className={s.carrousel1}>
                <img src={img[0]} alt={name} />
              </div>
              <div className={s.carrousel2}>
                <img src={img[0]} alt={name} onClick={handleOnClick} />
                <img src={img[1]} alt={name} onClick={handleOnClick} />
                <img src={img[2]} alt={name} onClick={handleOnClick} />
              </div>
            </div>
            <div className={s.details}>
              <h1 className={s.title}>{name}</h1>
              <span
                className={s.route}
              >{`Productos > ${searchByIdProduct.type}`}</span>
              <span className={s.brand}>Marca: {brand}</span>
              <span className={s.cost}>${cost}</span>
              <div className={s.svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-building-store"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="3" y1="21" x2="21" y2="21"></line>
                  <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
                  <line x1="5" y1="21" x2="5" y2="10.85"></line>
                  <line x1="19" y1="21" x2="19" y2="10.85"></line>
                  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                </svg>
                <span>Retiro en sucursal</span>
              </div>
              <div className={s.svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-truck-delivery"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <circle cx="17" cy="17" r="2"></circle>
                  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                  <line x1="3" y1="9" x2="7" y2="9"></line>
                </svg>
                <span>Envíos a todo el país</span>
              </div>
            </div>
          </div>
          <div className={s.especificaciones}>
            <Especificaciones product={searchByIdProduct} />
          </div>
        </main>
      )}
    </React.Fragment>
  );
}
