import React from "react";
import CarouselHeader from "./Carousel/Carousel"
import ProductSlider from '../ProductSlider'

export default function Home() {
  return (
    <main>
      <CarouselHeader />
      <h1><b>Productos</b> Destacados</h1>
      <ProductSlider />
    </main>
  );
}
