// import Carousel from 'react-bootstrap/Carousel';
// import Card from './Card/Card'

// function ProductCarousel() {
//   return (
//     <Carousel>
//       <Carousel.Item interval={1000}>
//        <Card />
//         <Carousel.Caption>     
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={1000}>
//         <Card />
//         <Carousel.Caption>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={1000}>
//         <Card />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ProductCarousel;


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.min.css'
import Card from './Card/Card'

export default function ProductSlider(){
    
  return(
        <div className='container py-4 px-4 justify-content-center'>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='mySwiper'
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  400: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 15
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  }
                }}
            >
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            </Swiper>
        </div>
    )
}