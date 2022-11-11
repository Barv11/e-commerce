import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteReview, reviewsByUser } from "../../redux/actions";
import Star from "../CardDetail/Reseñas/Star/Star";
import s from "./CardProfileReview.module.css";

export default function CardProfileReview({ review }) {
  const dispatch = useDispatch();
  const { id, title, description, rating, user, producto } = review;

  const handlerDelete = () => {
    dispatch(deleteReview(id));
    // dispatch(clearReviews());
    setTimeout(() => {
      dispatch(reviewsByUser(user.id));
    }, 1000);
  };
  return (
    <div className={s.container}>
      <hr />
      <p>Título: {title}</p>
      <p>Descripción: {description}</p>
      <p>Producto: {producto.name}</p>
      <Star filled={true} quantity={rating} />
      <Star filled={false} quantity={5 - rating} />
      <span className={s.delete}>
        <Link to={'/edit/review/'+id} className={s.edit}><i className="uil uil-edit-alt"></i></Link>
        <i className="uil uil-trash-alt" onClick={handlerDelete}></i>
      </span>
      <hr />
    </div>
  );
}
