import React from "react";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import s from "./loginGoogle.module.css";
import { userRegister } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, getAllUsers } from "../../redux/actions";
import { userLogin } from "../../redux/actions";

export default function LoginGoogle(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  const loginAccess = useSelector((state) => state.loginAccess);

  const handleCallbackResponse = (response) => {
    const userObj = jwtDecode(response.credential);
    const obj = {
      first_name: userObj.given_name,
      last_name: userObj.family_name,
      email: userObj.email,
      password: userObj.given_name + userObj.family_name + userObj.email,
      picture: userObj.picture,
      username: userObj.given_name,
    };

    const userFilter = allUsers.filter((u) => u.userName === obj.username);

    const fn = async () => {
      if (userFilter.length === 0) {
        await dispatch(userRegister(obj));
        await dispatch(
          userLogin({
            username: obj.username,
            pass: obj.password,
          })
        );
      } else {
        await dispatch(
          userLogin({
            username: obj.username,
            pass: obj.password,
          })
        );
      }
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
    };
    fn();
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "728691745498-7f5j7df1rd6qd9ldi2jgojelbptod9l2.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [dispatch, getAllUsers, allUsers]);

  return (
    <div>
      <div id="signInDiv" className={s.signInDiv}></div>
    </div>
  );
}
