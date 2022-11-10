import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Rating } from "@mui/material";
import {
  clearReviews,
  createReview,
  reviewsOfAProduct,
} from "../../../redux/actions";
import s from "./ReseñaForm.module.css";

export default function ReseñaForm({ setAddReview, id, userFound }) {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [review, setReview] = useState({
    productoId: id,
    userId: userFound.id,
    title: "",
    description: "",
    rating: "",
  });

  let validateBotton = (review.title.length > 0) && (review.description.length > 0) && (review.rating > 0) ? false : true

  const validate = (input) => {
    const error = {};
    if (!input.title) error.title = "El título es requerido";
    if (!input.description) error.description = "La descripción es requerida";
    return error;
  };

  const handlerOnChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...review,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlerSubmit = (e) => {
    console.log(review);
    dispatch(createReview(review));
    // dispatch(clearReviews());
    setTimeout(() => {
      dispatch(reviewsOfAProduct(id));
    }, 1000);
    setAddReview(false);
    setReview({
      ...review,
      title: "",
      description: "",
      rating: "",
    });
  };

  return (
    <form className={s.container}>
      <label className={s.label}>Título*</label>
      <input
        className={s.input}
        type="text"
        name="title"
        value={review.title}
        onChange={handlerOnChange}
      />
      <span style={{color: "red"}}>{error.title ? error.title : ''}</span>
      <label className={s.label}>Descripción*</label>
      <textarea
        name="description"
        onChange={handlerOnChange}
        value={review.description}
        placeholder="Agrege una pequeña descripción"
        className={`${s.input} ${s.textarea}`}
        rows="3"
        data-min-rows="3"
        autoFocus
      ></textarea>
      <span style={{color: "red"}}>{error.description ? error.description : ''}</span>
      <label className={s.label}>Calificación*</label>
      <Rating
        name="simple-controlled"
        defaultValue={0}
        value={review.rating}
        size="large"
        onChange={(event, newValue) => {
          console.log(event)
          if (newValue < 1) setError({...error, rating: "La calificación es requerida"})
          setReview({
            ...review,
            rating: newValue,
          });
        }}
      />
      <span style={{color: "red"}}>{error.rating ? error.rating : ''}</span>

      <button className={s.submit} onClick={handlerSubmit} disabled={validateBotton} style={validateBotton ? { cursor: 'not-allowed', backgroundColor: '#acadad' } : { cursor: 'pointer' }}>
        Enviar
      </button>
    </form>
  );
}
