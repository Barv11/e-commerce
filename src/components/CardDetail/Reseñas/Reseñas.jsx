import React from "react";
import s from "./Reseñas.module.css";
import Star from "./Star/Star";

export default function Reseñas() {

  const rating = 4;

  return (
    <div className={s.container}>
      <div className={s.user}>
        <img
          src="https://thumbs.dreamstime.com/z/cara-sonriente-de-la-persona-104947774.jpg"
          alt="name"
          className={s.avatar}
        />
        <span className={s.name}>Bryan Ramos Vargas</span>
      </div>
      <div className={s.star}>
        <Star filled={true} quantity={rating}/>
        <Star filled={false} quantity={5-rating}/>
      </div>
      <p className={s.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic asperiores
        labore aspernatur omnis, itaque voluptas nemo vitae mollitia expedita
        dicta rerum consectetur iusto deserunt nobis sint quae dignissimos
        eligendi neque?
      </p>
    </div>
  );
}
