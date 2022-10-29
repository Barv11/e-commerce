import React from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.css";

export default function Card({component}) {

  const {id, name, brand, img, cost} = component
  const fuente = {
    type: "fuente",
    brand: "Asus",
    name: "Fuente ASUS ROG STRIX 1000W 80 Plus Gold Full Modular 1000G",
    model: "ROG-STRIX-1000G",
    details: {
      Watts: "1000",
      Dimensions: "16 x 15 x 8.6 Centimeter",
      "Input Voltage": "100-240Vac",
      "Thermal Features": "ROG Thermal Solution",
    },
    img: [
      "https://dlcdnwebimgs.asus.com/gain/0CB64E96-7BAF-446C-893E-E96BBF09A133/w1000/h732",
      "https://dlcdnwebimgs.asus.com/gain/95565341-5A02-4780-9BF0-04F9C52155F6/w1000/h732",
      "https://dlcdnwebimgs.asus.com/gain/0EAD6D09-1FA9-487E-A69F-0CCC06902660/w1000/h732",
      "https://dlcdnwebimgs.asus.com/gain/065E380A-A744-4287-BC52-5456E1DA795B/w1000/h732",
      "https://dlcdnwebimgs.asus.com/gain/2BF79FB7-2DF2-4F97-B2E4-82F2499BD9C4/w1000/h732",
    ],
    cost: 46040,
  };

  return (
    <div className={s.card}>
      <img
        src={img[0]}
        alt={name}
        className={s.img}
      />
      <h3 className={s.name}>{name}</h3>
      <p className={s.cost}>{`$${cost}`}</p>
      <Link to={"/product/"} className={s.detail}>
        <span>Ver más</span>
      </Link>
    </div>
  );
}
