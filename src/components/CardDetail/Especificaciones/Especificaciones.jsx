import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DetailPantalla,
  DetailMouse,
  DetailMother,
  DetailProcesador,
  DetailDisco,
  DetailRam,
  DetailSolido,
  DetailTarjeta,
  DetailFuente,
  DetailTeclado,
  DetailAuricular,
  DetailGabinete,
  DetailCooler,
} from "../DetailComponents/index";

import Reseñas from "../Reseñas/Reseñas";
import ReseñaForm from "../ReseñaForm/ReseñaForm";
import s from "./Especificaciones.module.css";
import { reviewsOfAProduct } from "../../../redux/actions";
import Loader from "../../Loader/Loader";

export default function Especificaciones({ product, userFound }) {
  const dispatch = useDispatch();
  const [details, setDetails] = useState();
  const [render, setRender] = useState("especificaciones");
  const [addReview, setAddReview] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  localStorage.setItem("user", JSON.stringify(user));
  const productReviews = useSelector((state) => state.productReviews);

  const handleOnClick = (e) => {
    setRender(e.target.name);
  };

  const handlerReview = (e) => {
    setAddReview(true);
  };

  useEffect(() => {
    dispatch(reviewsOfAProduct(product.id));
    switch (product.type) {
      case "mother":
        setDetails(<DetailMother details={product.details} />);
        break;
      case "procesador":
        setDetails(<DetailProcesador details={product.details} />);
        break;
      case "disco":
        setDetails(<DetailDisco details={product.details} />);
        break;
      case "ram":
        setDetails(<DetailRam details={product.details} />);
        break;
      case "solido":
        setDetails(<DetailSolido details={product.details} />);
        break;
      case "tarjeta":
        setDetails(<DetailTarjeta details={product.details} />);
        break;
      case "mouse":
        setDetails(<DetailMouse details={product.details} />);
        break;
      case "pantalla":
        setDetails(<DetailPantalla details={product.details} />);
        break;
      case "fuente":
        setDetails(<DetailFuente details={product.details} />);
        break;
      case "teclado":
        setDetails(<DetailTeclado details={product.details} />);
        break;
      case "auricular":
        setDetails(<DetailAuricular details={product.details} />);
        break;
      case "gabinete":
        setDetails(<DetailGabinete details={product.details} />);
        break;
      case "cooler":
        setDetails(<DetailCooler details={product.details} />);
        break;
      default:
        break;
    }
  }, []);
  return (
    <div className={s.wrap}>
      <div className={s.line}>
        <button
          onClick={handleOnClick}
          name="especificaciones"
          className={`${s.title} ${
            render === "especificaciones" ? s.focus : null
          }`}
        >
          Especificaciones
        </button>
        <button
          onClick={handleOnClick}
          name="reseñas"
          className={`${s.title} ${render === "reseñas" ? s.focus : null}`}
        >
          Reseñas
        </button>
      </div>

      {render === "especificaciones" ? (
        <div className={s.containerDetails}>{details}</div>
      ) : (
        <div className={s.containerReseñas}>
          {productReviews.length
            ? productReviews.map((el) => <Reseñas review={el} idProduct={product.id} userFound={userFound}/>)
            : "Este producto no tiene reseñas."}
            {
              user.logged ? addReview ? (
                <ReseñaForm setAddReview={setAddReview} id={product.id} userFound={userFound}/>
              ) : (
                <button className={s.addReview} onClick={handlerReview}>
                  Agregar Reseña
                </button>
              ) : 'Debes registrarte para poder ver las reseñas.'
            }
          {}
        </div>
      )}
    </div>
  );
}
