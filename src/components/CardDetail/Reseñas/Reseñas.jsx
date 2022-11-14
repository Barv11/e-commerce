import React, { useState } from "react";
import s from "./Reseñas.module.css";
import Star from "./Star/Star";

export default function Reseñas({ review }) {
  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  localStorage.setItem("user", JSON.stringify(usuario));
  const { id, title, description, rating, user } = review;

  return (
    <div className={s.container}>
      <div className={s.user}>
        <img
          src="https://thumbs.dreamstime.com/z/cara-sonriente-de-la-persona-104947774.jpg"
          alt="name"
          className={s.avatar}
        />
        <span className={s.name}>{`${user.firstName} ${user.lastName}`}</span>
      </div>
      <div className={s.star}>
        <Star filled={true} quantity={rating} />
        <Star filled={false} quantity={5 - rating} />
      </div>
      <p className={s.title}>{title}</p>
      {/* <p className={s.text}>{description.replace(/\n/g, "<br />")}</p> */}
      <p className={s.text}>{description}</p>
    </div>
  );
}
