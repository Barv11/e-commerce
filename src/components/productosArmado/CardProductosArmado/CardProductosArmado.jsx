import React from 'react'
import s from './CardProductosArmado.module.css';
function CardProductosArmado({id, name, brand, img, details, type, cost, handleAdded}) {
  return (
    <div className={s.container}>
        <div className={s.containerData}>
        <div >
            <img src={img} alt="name" className={s.image} />
        </div>
        <div className={s.name}>
            {name}
        </div>
        <div className={s.brand}>
            {brand}
        </div>
        <div className={s.brand}>
            ${cost}
        </div>
        <div>
          <button id={s.addBtn} onClick={handleAdded} value={id}>Add</button>
        </div>
        </div>
    </div>
  )
}

export default CardProductosArmado