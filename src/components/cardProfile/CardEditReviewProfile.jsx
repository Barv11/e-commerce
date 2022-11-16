import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import s from "./CardEditReviewProfile.module.css";
import {
  updateReview,
  reviewsByUser,
  searchReview,
  clearSearchReview,
} from "./../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function CardEditReviewProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviewSearched = useSelector((state) => state.reviewSearched);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [review, setReview] = useState({
    id,
    title: "",
    description: "",
    rating: 0,
  });

  let validateBotton =
    review.title?.length > 0 &&
    review.description?.length > 0 &&
    review.rating > 0
      ? false
      : true;

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
    e.preventDefault();
    dispatch(updateReview(review));
    dispatch(clearSearchReview())
    dispatch(reviewsByUser());
    setReview({
      ...review,
      title: "",
      description: "",
      rating: "",
    });
    navigate("/profile");
  };

  useEffect(() => {
    setReview({
      id: reviewSearched.id,
      title: reviewSearched.title,
      description: reviewSearched.description,
      rating: reviewSearched.rating,
    });
  }, [reviewSearched]);

  useEffect(() => {
    dispatch(searchReview(id));
  }, []);
  return (
    <>
      <Navbar />
      <div className={s.background}>
        <div className={s.wrap}>
          <form className={s.container}>
            <label className={s.label}>Título*</label>
            <input
              className={s.input}
              type="text"
              name="title"
              value={review.title}
              onChange={handlerOnChange}
            />
            <span style={{ color: "red" }}>
              {error.title ? error.title : ""}
            </span>
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
            <span style={{ color: "red" }}>
              {error.description ? error.description : ""}
            </span>
            <label className={s.label}>Calificación*</label>
            <Rating
              name="simple-controlled"
              defaultValue={0}
              value={review.rating}
              size="large"
              onChange={(event, newValue) => {
                if (newValue < 1)
                  setError({
                    ...error,
                    rating: "La calificación es requerida",
                  });
                setReview({
                  ...review,
                  rating: newValue,
                });
              }}
            />
            <span style={{ color: "red" }}>
              {error.rating ? error.rating : ""}
            </span>

            <button
              className={s.submit}
              onClick={handlerSubmit}
              disabled={validateBotton}
              style={
                validateBotton
                  ? { cursor: "not-allowed", backgroundColor: "#acadad" }
                  : { cursor: "pointer" }
              }
            >
              Enviar
            </button>
          </form>
        </div>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </div>

      <Footer />
    </>
  );
}
