import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AdminDash.css";
import { Link } from "react-router-dom";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EditIcon from "@mui/icons-material/Edit";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, getUser } from "../../redux/actions";

export default function AdminDash() {
  const userFound = useSelector((state) => state.userFound);
  const dispatch = useDispatch()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    document.title = `Gamer Tech | Admin`;
    dispatch(clearMessage())
    dispatch(getUser(user.token))
  }, []);
  console.log(userFound)
  return (
    <div>
      <Navbar />
      <div className="containerDash">
        <h1 className="dashTitle">
          Dashboard <AutoAwesomeIcon color="secondary" sx={{ fontSize: 37 }} />
        </h1>
        <h2 className="dashSubTitle">
          ¡Bienvenido a tu dashboard! <EditIcon color="secondary" />
        </h2>
        <div>
          <Link style={{ textDecoration: "none" }} to={"/users"}>
            <div className="categoriasContainer">
              <h2 className="categoriasTxt">
                Lista de Usuarios <i class="uil uil-users-alt"></i>
              </h2>
            </div>
          </Link>
          {userFound?.role === "admin" || userFound?.role === "superAdmin" ? (
            <Link style={{ textDecoration: "none" }} to={"/create"}>
              <div className="categoriasContainer">
                <h2 className="categoriasTxt">
                  Crear Producto <i class="uil uil-file-plus-alt"></i>
                </h2>
              </div>
            </Link>
          ) : null}
          {userFound?.role === "admin" || userFound?.role === "superAdmin" ? (
            <Link style={{ textDecoration: "none" }} to={"/inventory"}>
              <div className="categoriasContainer">
                <h2 className="categoriasTxt">
                  Inventario <i class="uil uil-clipboard-notes"></i>
                </h2>
              </div>
            </Link>
          ) : null}
          {userFound?.role === "admin" || userFound?.role === "superAdmin" ? (
            <Link style={{ textDecoration: "none" }} to={"/orden"}>
              <div className="categoriasContainer">
                <h2 className="categoriasTxt">
                  Ordenes de Compra <i class="uil uil-shopping-cart"></i>
                </h2>
              </div>
            </Link>
          ) : null}
          {userFound?.role === "superAdmin" ? (
            <Link style={{ textDecoration: "none" }} to={"/trash"}>
              <div className="categoriasContainer">
                <h2 className="categoriasTxt">
                  Ver Papelera <i class="uil uil-trash-alt"></i>
                </h2>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
