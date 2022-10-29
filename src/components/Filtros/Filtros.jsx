import React from 'react'
import style from './Filtros.module.css'
function Filtros() {
  return (
    <div className={style.globalContainer}>
      <div className={style.filterSelect}>
      <select name="" id="">
      <option value=''>Order Alfa</option>
        <option value="">A-Z</option>
        <option value="">Z-A</option>
      </select>
      </div>
      <div className={style.filterSelect}>
      <select name="" id="">
      <option value=''>Price</option>
        <option value="Low Price">Low Price</option>
          <option value="High Price">High Price</option>
      </select>
      </div>
    </div>
  )
}

export default Filtros