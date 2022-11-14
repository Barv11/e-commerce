import React, { useState, useEffect } from "react";
import style from "./armadoPc.module.css";
import { Navbar, Footer } from "../../components";
import { useDispatch } from "react-redux";
import { getIntel, getAmd } from "../../redux/actions";
import PcChatBot from "../../components/PcChatBot/PcChatBot";

function ArmadoPc() {
  const dispatch = useDispatch();
  const [choice, setChoice] = useState({
    procesador: "",
    pcType: "",
  });


  useEffect(() => {
    document.title = `Gamer Tech | Arma tu PC`;
  }, []);

  useEffect(() => {
    if (choice.procesador === "AMD" && choice.pcType !== "") {
      dispatch(getAmd(choice.pcType));
      return;
    }
    if (choice.procesador === "Intel" && choice.pcType !== "") {
      dispatch(getIntel(choice.pcType));
      return;
    }
  }, [dispatch, choice]);

  const handleChoice = (e) => {
    console.log("Entre a handleChoice");
    e.preventDefault();
    setChoice({ ...choice, pcType: e.target.value });
    console.log(choice);
  };
  // console.log(choice)
  if (choice.procesador !== "" && choice.pcType !== "") {
    return <div>Componentes Filtrados</div>;
  }
  if (choice.procesador !== "") {
    return (
      <div>
        <Navbar />
        <div className={style.cardContainer}>
          <div className={style.titleChoice}>
            <>
              <h2>Elije tu tipo de PC</h2>
            </>
          </div>
          <div className={style.cardChoice}>
            <div>
              <h3>Work Office</h3>
            </div>
            <div>
              Ideal para:
              <ul>
                <li>Tareas basicas</li>
                <li>Programas basicos</li>
                <li>Navegar en la web</li>
              </ul>
            </div>
            <div>
              <button onClick={handleChoice} value="baja">
                Comenzar
              </button>
            </div>
          </div>

          <div className={style.cardChoice}>
            <div>
              <h3>Gaming</h3>
            </div>
            <div>
              Ideal para:
              <ul>
                <li>Edicion de video</li>
                <li>Videojuegos en calidad baja</li>
                <li>Recursos para un estudiante</li>
                <li>Trabajo remotos</li>
              </ul>
            </div>
            <div>
              <button onClick={handleChoice} value="media">
                Comenzar
              </button>
            </div>
          </div>

          <div className={style.cardChoice}>
            <div>
              <h3>Professional - Gaming</h3>
            </div>
            <div>
              Ideal para:
              <ul>
                <li>Alta calidad de graficos</li>
                <li>Edicion de video</li>
                <li>Altas prestaciones</li>
              </ul>
            </div>
            <div>
              <button onClick={handleChoice} value="alta">
                Comenzar
              </button>
            </div>
          </div>

          <div className={style.cardChoice}>
            <div>
              <h3>Gaming & Streaming</h3>
            </div>
            <div>
              Ideal para:
              <ul>
                <li>Transmision straming</li>
                <li>Videojuegos en la mas alta calidad</li>
                <li>Edicion de video profesional</li>
                <li>Renderizado 3D</li>
              </ul>
            </div>
            <div>
              <button onClick={handleChoice} value="superAlta">
                Comenzar
              </button>
            </div>
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
            onClick={() => setChoice({ ...choice, procesador: "Intel" })}
          ></button>
          <button
            className={style.amd}
            onClick={() => setChoice({ ...choice, procesador: "AMD" })}
          ></button>
        </div>
        <PcChatBot />
        <Footer />
      </div>
    );
  }
}

export default ArmadoPc;
