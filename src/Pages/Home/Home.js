import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carrusel from "../../components/Carousel/Carousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carrusel />
      <Card />
      <Footer />
    </div>
  );
}
