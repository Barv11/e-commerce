import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Paybutton({ cartItem }) {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();
  const userFound = useSelector((state) => state.userFound);


  // let deployed = "http://localhost:3001/";
  let deployed = "https://gametech.up.railway.app/";
  
  
  const handleCheckout = () => {
    if (user.logged) {
      axios
        .post(
          `${deployed}pago`,
          { cartItem, userId: userFound.id }
          /* userId: user.id */
        )
        .then((res) => {
          if (res.data) {
            window.location.href = res.data;
          }
        })
        .catch((err) => console.log(err.message));
    } else {
      navigate("/register");
    }
  };
  return (
    <div>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </div>
  );
}
