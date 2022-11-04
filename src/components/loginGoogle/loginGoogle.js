import React from "react";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import s from "./loginGoogle.module.css";
import { userRegister } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, getAllUsers } from "../../redux/actions";
import { userLogin } from "../../redux/actions";

export default function LoginGoogle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginAccess = useSelector((state) => state.loginAccess);
  const allUsers = useSelector((state) => state.allUsers);
  const [googleCreated] = useState(
    JSON.parse(localStorage.getItem("googleCreated"))
  );

  const handleCallbackResponse = (response) => {
    const userObj = jwtDecode(response.credential);
    const obj = {
      first_name: userObj.given_name,
      last_name: userObj.family_name,
      email: userObj.email,
      password: userObj.given_name + userObj.family_name + userObj.email,
      picture: userObj.picture,
      username: userObj.name,
    };

    const fn = async () => {
      if (googleCreated) {
        await dispatch(
          userLogin({
            username: obj.username,
            pass: obj.first_name + obj.last_name + obj.email,
          })
        );
        if (loginAccess.data?.token) {
          dispatch(userLogin("clear"));
          localStorage.setItem(
            "user",
            JSON.stringify({
              logged: true,
              token: loginAccess.data.token,
            })
          );
          navigate("/");
        }
      } else {
        await dispatch(userRegister(obj));
        localStorage.setItem("googleCreated", JSON.stringify(true));
        await dispatch(
          userLogin({
            username: obj.username,
            pass: obj.first_name + obj.last_name + obj.email,
          })
        );
        if (loginAccess.data?.token) {
          dispatch(userLogin("clear"));
          localStorage.setItem(
            "user",
            JSON.stringify({
              logged: true,
              token: loginAccess.data.token,
            })
          );
          navigate("/");
        }
      }
    };
    fn();
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "733514435284-l74vb75poain8kmhmqqvir2oiovhf1b1.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div>
      <div id="signInDiv" className={s.signInDiv}></div>
    </div>
  );
}
