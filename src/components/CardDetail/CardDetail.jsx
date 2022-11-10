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
} from "../../redux/actions";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";

export default function CardDetail(props) {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const searchByIdProduct = useSelector((state) => state.searchByIdProduct);
  const { name, brand, img, detail, cost, discount, quantity, stock } =
    searchByIdProduct;

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
  };

  localStorage.setItem("products", JSON.stringify(cart));

  const handleOnClick = (e) => {
    setImage(e.target.src);
  };

  useEffect(() => {
    dispatch(searchProductById(id));
  }, [dispatch]);

  useEffect(() => {
    if (Object.entries(searchByIdProduct).length !== 0) {
      setImage(img[0]);
      document.title = `Gamer Tech | ${searchByIdProduct.name}`;
    }
  }, [searchByIdProduct]);

  useEffect(() => {
    return dispatch(clearProducts());
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      {Object.entries(searchByIdProduct).length === 0 ? (
        <Loader />
      ) : (
        <main>
          <div className={s.container}>
            <div className={s.carrousel}>
              <div className={s.carrousel1}>
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
              >{`Productos > ${searchByIdProduct.type}`}</span>
              <span className={s.brand}>Marca: {brand}</span>
              <span className={s.route}>Stock: {stock}</span>
              <span className={s.cost}>${cost}</span>
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
            </div>
          </div>
          <div className={s.especificaciones}>
            <Especificaciones product={searchByIdProduct} userFound={userFound}/>
          </div>
        </main>
      )}
    </React.Fragment>
  );
}
