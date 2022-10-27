import React from "react";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import s from "./loginGoogle.module.css";
import { getCurrentUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginGoogle() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  
  const handleCallbackResponse = (response) => {
    let userObj = jwtDecode(response.credential);
    console.log(userObj)
    navigate("/")
    dispatch(getCurrentUser(userObj))
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "991930929385-3ajl2kmv3f3oidcn5oivdvg4rn56htce.apps.googleusercontent.com",
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
