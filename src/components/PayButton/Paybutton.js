import axios from "axios";
/* import { useSelector } from "react-redux"; */
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Paybutton(cartItem) {
  
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const handleCheckout = () => {
    if(user.logged){
      axios
        .post(
          "https://gametech.up.railway.app/create-checkout-session",
          cartItem
          /* userId: user.id */
        )
        .then((res) => {
          if (res.data) {
            window.location.href = res.data;
          }
        })
        .catch((err) => console.log(err.message));

    } else {
      navigate("/register")
    }
  };
  return (
    <div>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </div>
  );
}
