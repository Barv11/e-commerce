import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./PcArmada.module.css";
import { gabinete } from "../../../assets/icons";
import { addCartProduct } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import Modal from "../../Modals/Modal";
import { useModal } from "../../Modals/useModal";

function PcArmada({ item }) {
  const [myPc, setMyPc] = useState([]);
  const [chequeo, setChequeo] = useState("");
  const [compatibilidad, setCompatibilidad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const userFound = useSelector((state) => state.userFound);

  useEffect(() => {
    if (item) {
      const exist = myPc.filter((e) => e.type === item.type);
      if (exist.length) {
        const index = myPc.indexOf(exist[0]);
        myPc[index] = item;
        setChequeo(chequeo + "index");
        return;
      }
      setMyPc(myPc.concat(item));
      setChequeo(chequeo + "index");
    }
  }, [item]);

  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  localStorage.setItem("products", JSON.stringify(cart));

  const handleCheckout = () => {
    const procesador = myPc.filter((e) => e.type === "procesador");
    const mother = myPc.filter((e) => e.type === "mother");
    if (procesador.length && mother.length) {
      if (user.logged) {
        if (mother[0].details.Socket.includes(procesador[0].details.Socket)) {
          setCompatibilidad(true);
          myPc.forEach((e) => (e.img = e.img[0]));
          dispatch(addCartProduct(userFound.id, myPc));
          navigate("/carrito");
        } else {
          // alert(
          //   `El Procesador ${procesador[0].name} no es Compatible con la Mother ${mother[0].name}`
          // );
          openModal();
          setCompatibilidad(false);
        }
      } else {
        myPc.forEach((e) => {
          e.img = e.img[0];
          e.quantity = 1;
        });
        setCart([...cart.concat(myPc)]);
        alert("Productos Agregados con Exito Al Carrito")
      }
    } else {
      alert("Selecciona un procesador y una tarjeta madre como minimo");
    }
  };

  const deleteItems = (event) => {
    setMyPc([...myPc.filter((e) => e.id !== event.target.value)]);
  };

  if (myPc.length) {
    return (
      <div className={s.container}>
        {/* <div>PcArmada</div> */}
        <div>
          {myPc &&
            myPc?.map((e) => {
              return (
                <div key={e.id} className={s.card}>
                  <div>
                    <button id={s.x} onClick={deleteItems} value={e.id}>
                      ✖
                    </button>
                  </div>
                  <div>
                    <img
                      src={Array.isArray(e.img) ? e.img[0] : e.img}
                      alt={e.name}
                    />
                  </div>
                  <h2>{e.name}</h2>
                  <h3>{`$${e.cost}`}</h3>
                </div>
              );
            })}
        </div>
        <div className={s.btnContainer}>
          <div>
            <button id={s.clear} onClick={() => setMyPc([])}>
              Clear
            </button>
          </div>
          <div>
            <button id={s.check} onClick={handleCheckout}>
              Agregar al Carrito
            </button>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <h1 className="modalTitle">Error de compatibilidad</h1>
              <p className="modalSubtitle">El Procesador no es Compatible con la Mother</p>
            </Modal>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={s.containerNoItems}>
        <div>
          <h2>Empieza a armar tu pc</h2>
          <div>
            <img src={gabinete} alt="gabinete" className={s.image} />
          </div>
        </div>
      </div>
    );
  }
}

export default PcArmada;
