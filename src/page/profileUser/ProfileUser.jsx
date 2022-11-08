import { useEffect, useState } from "react";
import style from "./profileUser.module.css";
import { Navbar, Footer, CardProfle } from "../../components";
import { useDispatch } from "react-redux";
import fakePeople1 from "../../assets/fakePeople1.jpg";
import Accordion from "react-bootstrap/Accordion";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
export default function ProfileUser() {

  useEffect(() => {

  }, []);

  useEffect(() =>{
    document.title = `Gamer Tech | Profile`
  }, []); 

  return (
    <div className={style.containerGlobal}>
      <Navbar />

      <div className={style.cardUser}>
        <div className={style.headProfile}>
          <img
            src={fakePeople1}
            alt="fakePeople1"
            className={style.imgProfile}
          />
          <div>
            <h3>
              Hola! <strong>Laura Torres</strong>
            </h3>
            <p>Premium</p>
          </div>
        </div>

        <div className={style.acordeonContainer}>
          <Accordion defaultActiveKey="0" flush className={style.acordeon}>
            <Accordion.Item eventKey="0" className={style.eachItem}>
              <Accordion.Header>Mis Datos </Accordion.Header>
              <Accordion.Body className={style.insideItem}>
                <div>
                  <h3 className={style.subtitle}>Account data</h3>
                  <div>
                    <span>UserName:</span>
                    <CardProfle name={"Lau34"} />
                  </div>
                  <div>
                    <span>Email:</span>
                    <CardProfle name={"lau@gmail.com"} />
                  </div>
                  <h3 className={style.subtitle}>Personal Data</h3>
                  <div>
                    <span>Name:</span>
                    <CardProfle name={"Laura Torres"} />
                  </div>
                  <div>
                    <span>Phone Number:</span>
                    <CardProfle name={"559291023"} />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Mis Tarjetas </Accordion.Header>
              <Accordion.Body>
                <CreditCardIcon />
                <CardProfle name={"************** 3479"} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Direcciones </Accordion.Header>
              <Accordion.Body>
                <HomeIcon />
                <CardProfle name={"Calle Alcala 34 Buenos aires, Arg"} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Reviews </Accordion.Header>
              <Accordion.Body>
                <ReviewsIcon />
                <CardProfle name={"Rating 1"} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
