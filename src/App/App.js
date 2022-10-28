import Navbar from "../components/Navbar/Navbar.jsx";
import { Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "../components/Home/Home";
import CardDetail from "../components/CardDetail/CardDetail.jsx";
=======
import Home from "../page/home/Home";
import CardDetail from "../components/CardDetail/CardDetail";
>>>>>>> 67143abc50af408f82b5fcada1f9f0ae1f330bf4

function App() {
  return (
    <>
      <Route exact path={"/"}>
        <Home />
      </Route>
<<<<<<< HEAD
      <Route path={'/product/:id'}>
=======
      <Route path={"/product/id"}>
>>>>>>> 67143abc50af408f82b5fcada1f9f0ae1f330bf4
        <CardDetail />
      </Route>
    </>
  );
}

export default App;
