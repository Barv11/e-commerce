import React from "react";
import Card from "../Card/Card";
import CarouselHeader from "./Carousel/Carousel"
import CarouselProduct from '../CarouselProduct'
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
