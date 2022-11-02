import ProductSlider from "../../components/ProductSliderHome/ProductSlider";
import Carrusel from "../../components/Carruseles/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(
    JSON.parse(
      localStorage.getItem("user") ||
        JSON.stringify({
          logged: false,
          token: "",
        })
    )
  );

  localStorage.setItem("user", JSON.stringify(user));

  return (
    <div>
      <Navbar />
      <Carrusel />
      <ProductSlider />
      <Footer />
    </div>
  );
}
