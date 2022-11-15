import React, { useState, useEffect } from "react";
import s from "./CardDetail.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Especificaciones from "./Especificaciones/Especificaciones";
import {
  clearProducts,
  searchProductById,
  searchProductByName,
  addCartProduct,
  getAllProductos,
  addFavoritoProduct,
  getAllFavoritos
} from "../../redux/actions";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import Modal from "../Modals/Modal";
import { useModal } from "../Modals/useModal";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import PcChatBot from "../PcChatBot/PcChatBot";

export default function CardDetail(props) {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const searchByIdProduct = useSelector((state) => state.searchByIdProduct);
  const favoritos = useSelector((state) => state.favoritos);
  const {
    name,
    brand,
    img,
    detail,
    cost,
    discount,
    quantity,
    stock,
  } = searchByIdProduct;
  const [isOpenModal, openModal, closeModal] = useModal(false);

  useEffect(() => {
    dispatch(getAllProductos());
    dispatch(searchProductById(id));
    dispatch(getAllFavoritos(userFound?.id));
  }, [dispatch]);

  useEffect(() => {
    if (Object.entries(searchByIdProduct).length !== 0) {
      console.log(image);
      setImage(img[0]);
      document.title = `Gamer Tech | ${searchByIdProduct.name}`;
    }
  }, [searchByIdProduct]);

  useEffect(() => {
    return dispatch(clearProducts());
  }, []);

  // Funcion para que agregen al carrito
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const userFound = useSelector((state) => state.userFound);
  const handleCart = (props) => {
    if (user.logged) {
      dispatch(addCartProduct(userFound.id, [props]));
      console.log([props]);
      setCart([...cart.filter((p) => p.id !== props.id), props]);
    } else {
      setCart([...cart.filter((p) => p.id !== props.id), props]);
    }
    openModal();
  };

  localStorage.setItem("products", JSON.stringify(cart));

  const handleOnClick = (e) => {
    setImage(e.target.src);
  };

  const discountCost = (discount * cost) / 100;

  const handleFavorito = (productId) => {
    if (user.logged) {
      const exist = favoritos.filter((p) => p.id === productId);
      if (!exist.length) {
        dispatch(addFavoritoProduct(productId, userFound.id));
      }
    }
  };

  return (
    <>
      <Navbar />
      {Object.entries(searchByIdProduct).length === 0 ? (
        <Loader />
      ) : (
        <main>
          <div className={s.container}>
            <div className={s.carrousel}>
              <div className={s.carrousel1}>
                {user.logged && (
                  <button
                    className={s.favBtn}
                    onClick={() => handleFavorito(id)}
                  >
                    ❤
                  </button>
                )}
                <img src={image.length ? image : img[0]} alt={name} />
              </div>
              <div className={s.carrousel2}>
                {img?.map((el) => (
                  <img
                    src={el}
                    alt={name}
                    onClick={handleOnClick}
                    className={image === el ? s.border : null}
                  />
                ))}
              </div>
            </div>
            <div className={s.details}>
              <h1 className={s.title}>{name}</h1>
              <span
                className={s.route}
              >{`Productos ❯ ${searchByIdProduct.type}`}</span>
              <span className={s.brand}>Marca: {brand}</span>
              <span className={s.route}>Stock: {stock}</span>

              <span className={discount === 0 ? s.cost : s.disCost}>
                ${cost}
              </span>
              {discount !== 0 && (
                <span className={s.cost}>${cost - discountCost}</span>
              )}
              <div className={s.icon}>
                <i class="uil uil-shop"></i>
                <span>Retiro en sucursal</span>
              </div>
              <div className={s.icon}>
                <i class="uil uil-box"></i>
                <span>Envíos a todo el país</span>
              </div>
              <div
                className={s.cart2}
                onClick={() =>
                  handleCart({
                    cost,
                    discount,
                    id,
                    img: img[0],
                    name,
                    quantity: 1,
                  })
                }
              >
                <span className={s.add}>Add to cart</span>
                <i className="uil uil-shopping-cart"></i>
              </div>
              <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <h1 className={s.modalTitle}>
                  Producto agregado a tu carrito <ThumbUpAltRoundedIcon />
                </h1>
                <p className={s.modalSubtitle}>
                  Agregaste {name} a tu carrito exitosamente!
                </p>
              </Modal>
            </div>
          </div>
          <div className={s.especificaciones}>
            <Especificaciones product={searchByIdProduct} />
          </div>
        </main>
      )}
      <PcChatBot />
    </>
  );
}
