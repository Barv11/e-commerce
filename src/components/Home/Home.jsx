import React from "react";
import Card from "../Card/Card";
import Carousel from "./Carousel/Carousel";

export default function Home() {

  const obj = {
    id: 1,
    name: "Razer Basilisk V3 Pro - White",
    brand: "Razer",
    img: [
      "https://assets3.razerzone.com/44O6McFXZ2BebT0jtPdPWaiyLec=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fh4b%2F9446067077150%2F221015-basilisk-v3-pro-white-1500x1000-1.jpg",
      "https://assets3.razerzone.com/KxHkBDMKOYjGh-L6w9Xggz47OmA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh48%2Fh49%2F9446067109918%2F221015-basilisk-v3-pro-white-1500x1000-2.jpg",
      "https://assets3.razerzone.com/J9B7ilNcVk0sCfcXyXnvDlSlHT8=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh59%2Fh97%2F9446066946078%2F221015-basilisk-v3-pro-white-1500x1000-4.jpg",
      "https://assets3.razerzone.com/HF1HzPEp_mGFkERMZRsSgPZ68rs=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh97%2F9446066978846%2F221015-basilisk-v3-pro-white-1500x1000-3.jpg",
    ],
    detail: {
      description:
        "Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel",
      connectivity: [
        "Razer™ HyperSpeed Wireless",
        "Bluetooth",
        "Wired – Speedflex Cable USB Type C",
      ],
      rgb: "Razer Chroma™ RGB",
      sensitivity: 30000,
      buttons: 11,
      clicks: "90-million",
      sizes: [
        "Length: 130 mm / 5.11 in",
        "Width: 75.4 mm / 2.96 in",
        "Height: 42.5 mm / 1.67 in",
      ],
      weight: "112 g / 3.95 oz (Excluding cable)",
    },
    cost: 160,
  };

  return (
    <main>
      <Carousel />
      <h1><b>Productoos</b> Destacados</h1>
      <Card component={obj}/>
    </main>
  );
}
