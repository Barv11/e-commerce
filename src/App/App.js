import Navbar from "../components/Navbar/Navbar";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path={"/"}>
      </Route>
      <Route path={'/product/id'}>
      </Route>
    </>
  );
}

export default App;
