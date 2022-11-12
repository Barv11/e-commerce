import { Route, Routes } from "react-router-dom";
import { Products, Home, Profile, ArmadoPc } from "../page";
import {
  CardDetail,
  Login,
  Register,
  CreateProduct,
  Carrito,
  Favoritos,
} from "../components";
import AdminPage from "../page/Admin/AdminPage";
import Orden from "../components/Orden/Orden";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { saveToken, getUser } from "../redux/actions";
import EditProducts from "../components/EditProducts/EditProducts";
import About from "../components/About/About";
import AllUsers from "../components/ListaUsuarios/AllUsers";
import ReseñaForm from "../components/CardDetail/ReseñaForm/ReseñaForm";
import CardEditReviewProfile from "../components/cardProfile/CardEditReviewProfile";
import RemovedProducts from "../components/RemovedProducts/RemovedProducts";

function App() {
  const dispatch = useDispatch();

  const [user] = useState(
    JSON.parse(
      localStorage.getItem("user") ||
        JSON.stringify({
          logged: false,
          token: "",
        })
    )
  );

  localStorage.setItem("user", JSON.stringify(user));

  useEffect(() => {
    if (user.logged) {
      saveToken(user.token);
    }
  }, []);

  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/register"} element={<Register />} />
      <Route path={"/products"} element={<Products />} />
      <Route path={"/detail/:id"} element={<CardDetail />} />
      <Route path={"/create"} element={<CreateProduct />} />
      <Route path={"/edit/:id"} element={<CreateProduct />} />
      <Route path={"/edit/review/:id"} element={<CardEditReviewProfile />} />
      <Route path={"/edit"} element={<EditProducts />} />
      <Route path={"/trash"} element={<RemovedProducts />} />
      <Route path={"/admin"} element={<AdminPage />} />
      <Route path={"/orden"} element={<Orden />} />
      <Route path={"/carrito"} element={<Carrito />} />
      <Route path={"/favoritos"} element={<Favoritos />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/armado"} element={<ArmadoPc />} />
      <Route path={"/users"} element={<AllUsers />} />
    </Routes>
  );
}

export default App;
