import ProductSlider from "../../components/ProductSliderHome/ProductSlider";
import Carrusel from "../../components/Carruseles/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getCartProduct, saveToken, setWelcome } from "../../redux/actions";
import PcChatBot from "../../components/PcChatBot/PcChatBot";
import Anuncio from "../../components/Anuncio/Anuncio";
import Welcome from "../../components/Welcome/Welcome";

export default function Home() {
  const dispatch = useDispatch();
  const welcome = useSelector((state) => state.welcome);


  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "[]")
  );

  // const [products, setProducts] = useState(
  //   JSON.parse(localStorage.getItem("products") || "[]")
  // );

  useEffect(() => {
    if (user.logged) {
      dispatch(getUser(user.token));
      dispatch(setWelcome(true));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user.logged) {
      saveToken(user.token);
    }
  }, []);

  useEffect(() => {
    document.title = `Gamer Tech`;
  }, []);

  return (
    <>
      <Navbar />
      {welcome ? <Welcome/> : null}
      <Carrusel />
      <Anuncio />
      <ProductSlider />
      <PcChatBot />
      <Footer />
    </>
  );
}
