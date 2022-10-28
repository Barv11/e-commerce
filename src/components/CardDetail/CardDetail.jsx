import React from "react";
import s from "./CardDetail.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Especificaciones from "./Especificaciones/Especificaciones";

export default function CardDetail() {
  // const { id } = useParams();

  const { name, brand, img, detail, cost } = {
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

  const [image, setImage] = useState(img[0]);

  const handleOnClick = (e) => {
    setImage(e.target.src);
  };

  return (
    <main>
      <div className={s.container}>
        <div className={s.carrousel}>
          <div className={s.carrousel1}>
            <img src={image} alt={name} />
          </div>
          <div className={s.carrousel2}>
            <img src={img[0]} alt={name} onClick={handleOnClick} />
            <img src={img[1]} alt={name} onClick={handleOnClick} />
            <img src={img[2]} alt={name} onClick={handleOnClick} />
          </div>
        </div>
        <div className={s.details}>
          <h1 className={s.title}>{name}</h1>
          <span className={s.route}>{"Productos > Mouses"}</span>
          <span className={s.brand}>Marca: {brand}</span>
          <span className={s.cost}>US$159.99</span>
          <div className={s.svg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-building-store"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="3" y1="21" x2="21" y2="21"></line>
              <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
              <line x1="5" y1="21" x2="5" y2="10.85"></line>
              <line x1="19" y1="21" x2="19" y2="10.85"></line>
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
            </svg>
            <span>Retiro en sucursal</span>
          </div>
          <div className={s.svg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-truck-delivery"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <circle cx="17" cy="17" r="2"></circle>
              <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
              <line x1="3" y1="9" x2="7" y2="9"></line>
            </svg>
            <span>Envíos a todo el país</span>
          </div>
        </div>
      </div>
      <div className={s.especificaciones}>
        <Especificaciones detail={detail} />
      </div>
    </main>
  );
}
