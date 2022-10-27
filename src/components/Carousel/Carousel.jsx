import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

function Carrusel() {
  return (
    <div className="container-all-carrusel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hardzone.es/app/uploads-hardzone.es/2019/05/CORSAIR-VENGEANCE-5180-Gaming-PC.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>

            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hardzone.es/app/uploads-hardzone.es/2019/05/CORSAIR-VENGEANCE-5180-Gaming-PC.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>

            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imagekit.androidphoria.com/wp-content/uploads/5-cosas-que-necesita-un-set-up-gamer.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
