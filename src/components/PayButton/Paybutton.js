import axios from "axios";
/* import { useSelector } from "react-redux"; */

export default function Paybutton(cartItem) {
  /* const user = useSelector((state) => state.auth); */
  const handleCheckout = () => {
    axios
      .post(
        "http://localhost:3001/create-checkout-session",
        cartItem
        /* userId: user.id */
      )
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </div>
  );
}
