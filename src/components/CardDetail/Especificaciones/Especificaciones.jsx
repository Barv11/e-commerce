import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import DetailPantalla from "../DetailComponents/DetailPantalla/DetailPantalla";
import DetailMouse from "../DetailComponents/DetailMouse/DetailMouse";
import DetailMother from "../DetailComponents/DetailMother/DetailMother";
import DetailProcesador from "../DetailComponents/DetailProcesador/DetailProcesador";
import DetailDisco from "../DetailComponents/DetailDisco/DetailDisco";
import DetailRam from "../DetailComponents/DetailRam/DetailRam";
import DetailSolido from "../DetailComponents/DetailSolido/DetailSolido";
import DetailTarjeta from "../DetailComponents/DetailTarjeta/DetailTarjeta";
import DetailFuente from "../DetailComponents/DetailFuente/DetailFuente";
import DetailTeclado from "../DetailComponents/DetailTeclado/DetailTeclado";
import DetailAuricular from "../DetailComponents/DetailAuricular/DetailAuricular";
import DetailGabinete from "../DetailComponents/DetailGabinete/DetailGabinete";
import DetailCooler from "../DetailComponents/DetailCooler/DetailCooler";
import s from "./Especificaciones.module.css";
import Reseñas from "../Reseñas/Reseñas";

export default function Especificaciones({ product }) {
  const [details, setDetails] = useState();
  const [render, setRender] = useState("especificaciones");

  const handleOnClick = (e) => {
    setRender(e.target.name);
  };

  useEffect(() => {
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
          <Reseñas />
          <Reseñas />
          <Reseñas />
          <Reseñas />
          <button className={s.addReview}>Agregar Reseña</button>
        </div>
      )}
    </div>
  );
}
