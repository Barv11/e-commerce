import React, {useState }from "react";
import s from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProducts,
  getAllProductos,
  toggleProductType,
  // ordennames
} from "../../redux/actions";

export default function SideBar() {
  const dispatch = useDispatch();
  
  const handleClick = (type) => {
    dispatch(clearProducts());
    dispatch(getAllProductos());
    dispatch(toggleProductType(type));
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
        <button onClick={() => handleClick("mother")}>MotherBoards</button>
        <button onClick={() => handleClick("procesador")}>Procesadores</button>
        <button onClick={() => handleClick("ram")}>RAM</button>
        <button onClick={() => handleClick("tarjeta")}>
          Tarjetas de Video
        </button>
        <button onClick={() => handleClick("fuente")}>Fuentes</button>
        <button onClick={() => handleClick("disco")}>Discos Duros</button>
        <button onClick={() => handleClick("cooler")}>Coolers</button>
        <button onClick={() => handleClick("solido")}>Discos Solidos</button>
        <button onClick={() => handleClick("pantalla")}>Pantallas</button>
        <button onClick={() => handleClick("mouse")}>Mouses</button>
        <button onClick={() => handleClick("teclado")}>Teclados</button>
        <button onClick={() => handleClick("gabinete")}>Gabinetes</button>
        <button onClick={() => handleClick("auricular")}>Auriculares</button>
      </div>
      <div className={s.filters}></div>
    </div>
  );
}
