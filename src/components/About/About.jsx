import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PcChatBot from "../PcChatBot/PcChatBot";
import s from "./About.module.css";

export default function About() {
  useEffect(() => {
    document.title = `Gamer Tech | Nosotros`;
  }, []);
  return (
    <>
      <Navbar />
      <main className={s.main}>
        <div className={s.container}>
          <img
            src="https://cdn.autonomous.ai/static/upload/images/common/upload/20220310/Pink-and-Blue-Gaming-Setup-for-PC-Gamers_1efdc5c5962.jpg"
            alt="pcgamer"
          />
        </div>
        <div className={s.back}>
          <h3>Gamer Tech es una empresa "creativo" "multidisciplinar".</h3>
          <p>
            Trabajamos juntos para conseguir, buscar y producir componentes de
            computadoras de los que estamos orgullosos. Estamos disponibles para
            proveer en una amplia gama de componentes para una variedad de
            equipos.
          </p>

          <h1>Historia</h1>
          <p>
            En el invierno de 2011, mientras trabajaban como miembros en ADX ,
            Makerspace de Portland, Zach y Josh se conocieron y se hicieron
            amigos, compartiendo el amor por el arte, el punk y los burritos.
            Con la ayuda de sus amigos en ADX, formaron Band, un estudio
            creativo diverso, que se dibuja a mano, se hace desde cero y se hace
            en conjunto, en una habitación que construyeron sobre la cocina de
            la tienda.
          </p>
          <p>
            Desde entonces, Band ha trabajado en una amplia gama de proyectos
            únicos con algunas de las mejores personas del noroeste del Pacífico
            y más allá. Nos esforzamos por mantener nuestro trabajo único e
            inteligente, con espacio para un poco de magia. Puede encontrarnos
            en cualquier lugar, y si el proyecto es el adecuado, nos encantaría
            trabajar con usted. Siéntase libre de enviarnos una línea, aquí .
          </p>
          
        </div>
      </main>
      <PcChatBot />
      <Footer />
    </>
  );
}
