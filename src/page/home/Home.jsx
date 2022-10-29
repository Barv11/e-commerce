import ProductSlider from "../../components/ProductSlider";
import Carrusel from "../../components/Carruseles/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carrusel />
      <ProductSlider />
      <Footer />
    </div>
  );
}
