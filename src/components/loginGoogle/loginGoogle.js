import React from "react";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import s from "./loginGoogle.module.css";
import { userRegister } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginGoogle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCallbackResponse = (response) => {
    let userObj = jwtDecode(response.credential);
    console.log(userObj);
    navigate("/");
    const obj = {first_name : userObj.given_name, last_name: userObj.family_name, email: userObj.email, password: userObj.jti, picture: userObj.picture, username:userObj.name}
    dispatch(userRegister(obj));
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

