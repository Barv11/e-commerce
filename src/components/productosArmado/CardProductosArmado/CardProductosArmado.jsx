import React from 'react'
import style from './CardProductosArmado.module.css';
function CardProductosArmado({id, name, brand, img, details, type, cost, handleAdded}) {
  return (
    <div>
        <div className={style.containerData}>
        <div >
            <img src={img} alt="name" className={style.image} />
        </div>
        <div className={style.name}>
            {name}
        </div>
        <div className={style.brand}>
            {brand}
        </div>
        <div className={style.brand}>
            ${cost} ARG
        </div>
        <div>
          <button onClick={handleAdded} value={id}>Add</button>
        </div>
        </div>
    </div>
  )
}

export default CardProductosArmado