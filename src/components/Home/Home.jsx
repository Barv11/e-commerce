import React from "react";
import Card from "../Card/Card";
import Carousel from "./Carousel/Carousel";

export default function Home() {
  return (
    <main>
      <Carousel />
      <h1><b>Productoos</b> Destacados</h1>
      <Card />
      <Card />
    </main>
  );
}
