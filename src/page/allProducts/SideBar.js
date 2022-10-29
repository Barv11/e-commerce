import React from "react";
import s from "./SideBar.module.css";
import { useDispatch } from "react-redux";
import {
  clearProducts,
  getAllProductos,
  toggleProductType,
} from "../../redux/actions";
import {cpu, motherboard, tarjeta, cooler, ram, 
  fuente, hdd, ssd, monitor, mouse, keyboard, 
  gabinete, headphones} from '../../assets/icons'

export default function SideBar() {
  const dispatch = useDispatch();

  const handleClick = (type) => {
    dispatch(clearProducts());
    dispatch(getAllProductos());
    dispatch(toggleProductType(type));
  };

  return (
    <div className={s.container}>
      <div className={s.typesContainer}>
        <button onClick={() => handleClick("mother")}>
          <img src={motherboard} alt="cpu" className={s.image}/>
          </button>
        <button onClick={() => handleClick("procesador")}>
        <img src={cpu} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("ram")}>
        <img src={ram} alt="cpu" className={s.image}/>
        </button>        
        <button onClick={() => handleClick("tarjeta")}>
        <img src={tarjeta} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("fuente")}>
        <img src={fuente} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("discos")}>
        <img src={hdd} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("cooler")}>
        <img src={cooler} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("solido")}>
        <img src={ssd} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("pantalla")}>
        <img src={monitor} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("mouse")}>
        <img src={mouse} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("teclado")}>
        <img src={keyboard} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("gabinete")}>
        <img src={gabinete} alt="cpu" className={s.image}/>
        </button>
        <button onClick={() => handleClick("auricular")}>
        <img src={headphones} alt="cpu" className={s.image}/>
        </button>
      </div>
      <div className={s.filters}></div>
    </div>
  );
}
