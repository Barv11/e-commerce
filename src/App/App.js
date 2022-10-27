import { Route } from "react-router-dom";
import Home from "../page/home/Home";
import CardDetail from "../components/CardDetail.jsx/CardDetail";

function App() {
  return (
    <>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={'/product/id'}>
        <CardDetail />
      </Route>
    </>
  );
}

export default App;
