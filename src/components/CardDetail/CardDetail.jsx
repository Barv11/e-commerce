import React, { useState, useEffect } from "react";
import s from "./CardDetail.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Especificaciones from "./Especificaciones/Especificaciones";
import {
  clearProducts,
  searchProductById,
  searchProductByName,
} from "../../redux/actions";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";

export default function CardDetail() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const searchByIdProduct = useSelector((state) => state.searchByIdProduct);
  const { name, brand, img, detail, cost } = searchByIdProduct;

  useEffect(() => {
    dispatch(searchProductById(id));
  }, [dispatch]);

  useEffect(() => {
    if (Object.entries(searchByIdProduct).length !== 0) {
      console.log(image);
      setImage(img[0]);
      document.title = `Gamer Tech | ${searchByIdProduct.name}`;
    }
  }, [searchByIdProduct]);

  useEffect(() => {
    return dispatch(clearProducts());
  }, []);

  const handleOnClick = (e) => {
    setImage(e.target.src);
  };
  return (
    <React.Fragment>
      <Navbar />
      {Object.entries(searchByIdProduct).length === 0 ? (
        <Loader />
      ) : (
        <main>
          <div className={s.container}>
            <div className={s.carrousel}>
              <div className={s.carrousel1}>
                <img src={image.length ? image : img[0]} alt={name} />
              </div>
              <div className={s.carrousel2}>
                {img?.map((el) => (
                  <img
                    src={el}
                    alt={name}
                    onClick={handleOnClick}
                    className={image === el ? s.border : null}
                  />
                ))}
              </div>
            </div>
            <div className={s.details}>
              <h1 className={s.title}>{name}</h1>
              <span
                className={s.route}
              >{`Productos > ${searchByIdProduct.type}`}</span>
              <span className={s.brand}>Marca: {brand}</span>
              <span className={s.cost}>${cost}</span>
              <div className={s.icon}>
                <i class="uil uil-shop"></i>
                <span>Retiro en sucursal</span>
              </div>
              <div className={s.icon}>
              <i class="uil uil-box"></i>
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
