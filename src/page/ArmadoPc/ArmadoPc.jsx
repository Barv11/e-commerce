import React, { useState, useEffect } from "react";
import style from "./armadoPc.module.css";
import { Navbar, Footer, ProductosArmado } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getIntel, getAmd } from "../../redux/actions";
import PcChatBot from "../../components/PcChatBot/PcChatBot";

function ArmadoPc() {
  const dispatch = useDispatch();
  const [choice, setChoice] = useState("");
  const [pcChoice, setPcChoice] = useState(false);

  const productsIntel = useSelector((state) => state.productsIntel);
  const productsAmd = useSelector((state) => state.productsAmd);

  const handleChoice = (type) => {
    setPcChoice(true);
    if (choice === "Intel") {
      console.log("entre");
      dispatch(getIntel(type));
      return;
    } else {
      dispatch(getAmd(type));
    }
  };

  console.log(productsIntel);

  if (choice !== "" && pcChoice === true) {
    // AMD Y GAMA
    return (
      <div>
        <div>
          {productsIntel?.length === 0 ? (
            <ProductosArmado products={productsAmd} />
          ) : (
            <ProductosArmado products={productsIntel} />
          )}
        </div>
        <div></div>
      </div>
    );
  }
  if (choice !== "") {
    // AMD O INTEL
    return (
      <div>
        <Navbar />
        <div className={style.cardContainer}>
          <div className={style.titleChoice}>
            <>
              <h2>Elije tu tipo de PC</h2>
            </>
          </div>

          <div id={style.workOffice} className={style.cardChoice}>
            <h3>Work Office</h3>
            <div className={style.elseContainer}>
              <div className={style.textContainer}>
                <li>● Tareas basicas</li>
                <li>● Programas basicos</li>
                <li>● Navegar en la web</li>
              </div>
              <div>
                <button onClick={() => handleChoice("baja")}>Comenzar</button>
              </div>
            </div>
            <div className={style.filter}></div>
          </div>

          <div id={style.Gaming} className={style.cardChoice}>
            <h3>Gaming</h3>
            <div className={style.elseContainer}>
              <div className={style.textContainer}>
                <li>● Edicion de video</li>
                <li>● Videojuegos en calidad baja</li>
                <li>● Recursos para un estudiante</li>
                <li>● Trabajo remotos</li>
              </div>
              <div>
                <button onClick={() => handleChoice("media")}>Comenzar</button>
              </div>
            </div>
            <div className={style.filter}></div>
          </div>

          <div id={style.ProfAndGaming} className={style.cardChoice}>
            <h3>Professional - Gaming</h3>

            <div className={style.elseContainer}>
              <div className={style.textContainer}>
                <li>● Alta calidad de graficos</li>
                <li>● Edicion de video</li>
                <li>● Altas prestaciones</li>
              </div>
              <div>
                <button onClick={() => handleChoice("alta")}>Comenzar</button>
              </div>
            </div>
            <div className={style.filter}></div>
          </div>

          <div id={style.GamingAndStreaming} className={style.cardChoice}>
            <h3>Gaming & Streaming</h3>

            <div className={style.elseContainer}>
              <div className={style.textContainer}>
                <li>● Transmision straming</li>
                <li>● Videojuegos en la mas alta calidad</li>
                <li>● Edicion de video profesional</li>
                <li>● Renderizado 3D</li>
              </div>
              <div>
                <button onClick={() => handleChoice("muy alta")}>
                  Comenzar
                </button>
              </div>
            </div>
            <div className={style.filter}></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className={style.choice}>
          <button
            className={style.intel}
            onClick={() => setChoice("Intel")}
          ></button>
          <button
            className={style.amd}
            onClick={() => setChoice("AMD")}
          ></button>
        </div>
        <PcChatBot />
        <Footer />
      </div>
    );
  }
}

export default ArmadoPc;
