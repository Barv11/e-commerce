import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearReviews,
  deleteReview,
  reviewsOfAProduct,
} from "../../../redux/actions";
import s from "./Reseñas.module.css";
import Star from "./Star/Star";

export default function Reseñas({ review, idProduct, userFound }) {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  localStorage.setItem("user", JSON.stringify(usuario));
  const { id, title, description, rating, user } = review;

  let display = {
    display: "none"
  }

  const handlerDelete = () => {
    dispatch(deleteReview(id));
    // dispatch(clearReviews());
    setTimeout(() => {
      dispatch(reviewsOfAProduct(idProduct));
    }, 1000);
  };
console.log({ 1: userFound.id, 2: user.id})
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
      {/* <i className="uil uil-edit-alt"></i> */}
      <i className="uil uil-trash-alt" onClick={handlerDelete} style={userFound.id === user.id ? {cursor: "pointer"} : display}></i>
    </div>
  );
}
