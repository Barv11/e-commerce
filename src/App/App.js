import { Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Usuario from "../Pages/Usuario/Usuario";

function App() {
  return (
    <>
      <Route path={"/"}>
        <Home />
      </Route>
      <Route path={"/Usuario"}>
        <Usuario />
      </Route>
    </>
  );
}

export default App;
