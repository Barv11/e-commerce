import React from 'react'
import s from './Pagination.module.css';


function Pagination({ productsPerPage, totalProducts, productsFilter, pagina }) {
   
    const numeroDePaginas = [];
    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        numeroDePaginas.push(i)
    }
    return (
    <div className={s.container}>
        <ul className={s.paginationContainer}>
        {numeroDePaginas?.map(num => (
            <li key={num} className={s.page}>
                <button onClick={() => pagina(num)} className={s.btnPagination}>{num}</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Pagination