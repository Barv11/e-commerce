import React from 'react'
import { CardProductosArmado } from '../../../components'
import style from '../ContainerProductosArmado/ContainerProductos.module.css';
function ContainerProductos({items, title, handleAdded}) {


  return (
    <div>
      <h2>{title}</h2>
    <div className={style.globalContainer}>
      {items?.map(e => {
        return (
          <CardProductosArmado 
          key={e.id}
          id={e.id}
          img={e.img[0]}
          name={e.name} 
          brand={e.brand}
          cost={e.cost}
          details={e.details}
          type={e.type}
          handleAdded={handleAdded}
          />
        )

      })}
    </div>
    </div>
  )
}

export default ContainerProductos