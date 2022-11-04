import React, { useState } from "react";
import s from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProducts,
  getAllProductos,
  toggleProductType,
  // ordennames
} from "../../redux/actions";
import {
  cpu,
  motherboard,
  tarjeta,
  cooler,
  ram,
  fuente,
  hdd,
  ssd,
  monitor,
  mouse,
  keyboard,
  gabinete,
  headphones,
} from "../../assets/icons";

export default function SideBar({ setCurrentPage, setOrden }) {
  const dispatch = useDispatch();
  const handleClick = (type) => {
    dispatch(clearProducts());
    dispatch(getAllProductos());
    dispatch(toggleProductType(type));
    setCurrentPage(1);
    setOrden("");
  };

  // const OrderName = (event) =>{
  //   event.preventDefault();
  //   dispatch(ordennames(event.target.value));
  //   setCurrentPage(1);
  //   setOrden(`Ordenado ${event.target.value}`)
  // }

  return (
    <div className={s.container}>
      <div className={s.typesContainer}>
        <button data-foo='Mother' onClick={() => handleClick("mother")}>
          <img src={motherboard} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Procesador' onClick={() => handleClick("procesador")}>
          <img src={cpu} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Ram' onClick={() => handleClick("ram")}>
          <img src={ram} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Tarjeta' onClick={() => handleClick("tarjeta")}>
          <img src={tarjeta} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Fuente' onClick={() => handleClick("fuente")}>
          <img src={fuente} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Disco' onClick={() => handleClick("disco")}>
          <img src={hdd} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Cooler' onClick={() => handleClick("cooler")}>
          <img src={cooler} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Solido' onClick={() => handleClick("solido")}>
          <img src={ssd} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Pantalla' onClick={() => handleClick("pantalla")}>
          <img src={monitor} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Mouse' onClick={() => handleClick("mouse")}>
          <img src={mouse} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Teclado' onClick={() => handleClick("teclado")}>
          <img src={keyboard} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Gabinete' onClick={() => handleClick("gabinete")}>
          <img src={gabinete} alt="cpu" className={s.image} />
        </button>
        <button data-foo='Auricular' onClick={() => handleClick("auricular")}>
          <img src={headphones} alt="cpu" className={s.image} />
        </button>
      </div>
      <div className={s.filters}></div>
    </div>
  );
}
