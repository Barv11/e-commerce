import { Route, Routes } from "react-router-dom";
import Login from "../components/LoginForm/LoginForm";
import Products from "../page/allProducts/AllProducts";
import Home from "../page/home/Home";
function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route path={"/products"} element={<Products />} />
    </Routes>
  );
}

export default App;
