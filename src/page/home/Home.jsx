import ProductSlider from "../../components/ProductSliderHome/ProductSlider";
import Carrusel from "../../components/Carruseles/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getCartProduct } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  // const userFound = useSelector((state) => state.userFound);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "[]")
  );

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  useEffect(() => {
    if (user.logged) {
      dispatch(getUser(user.token));
    }
  }, []);

  
  return (
    <div>
      <Navbar />
      <Carrusel />
      <ProductSlider />
      <Footer />
    </div>
  );
}
