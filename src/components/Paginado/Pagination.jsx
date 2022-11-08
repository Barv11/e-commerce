import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.min.css";

import s from './Pagination.module.css';


function Pagination({ productsPerPage, totalProducts, productsFilter, pagina }) {
   
    const numeroDePaginas = [];
    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        numeroDePaginas.push(i)
    }
    return (
    <div className={s.container}>
        {/* <ul className={s.paginationContainer}>
        {numeroDePaginas?.map(num => (
            <li key={num} className={s.page}>
                <button onClick={() => pagina(num)} className={s.btnPagination}>{num}</button>
            </li>
        ))}
        </ul> */}
        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Navigation]}
        navigation={true}
        // className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 6,
            spaceBetween: 1,
          },
          400: {
            slidesPerView: 6,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 10,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 14,
            spaceBetween: 1,
          },
          1280: {
            slidesPerView: 18,
            spaceBetween: 1,
          },
        }}
      >
        {numeroDePaginas?.map(num => (
            // <li key={num} className={s.page}>
            //     <button onClick={() => pagina(num)} className={s.btnPagination}>{num}</button>
            // </li>
            <SwiperSlide className={s.page}>
                <button onClick={() => pagina(num)} className={s.btnPagination}>{num}</button>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Pagination