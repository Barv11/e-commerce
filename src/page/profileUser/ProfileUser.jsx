import { useEffect, useState } from "react";
import style from "./profileUser.module.css";
import { Navbar, Footer, CardProfle } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import fakePeople1 from "../../assets/fakePeople1.jpg";
import Accordion from "react-bootstrap/Accordion";
import { getOneUser } from '../../redux/actions';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CommentIcon from '@mui/icons-material/Comment';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function ProfileUser() {
  
  const dispatch = useDispatch()
  const userProfile = useSelector(state => state.userProfile)

  useEffect(() => {
    dispatch(getOneUser())
  }, [dispatch]);

  // const uploadImage = async (e) => {
  //   const file = e.target.files[0];
  //   // dispatch(postImage(file))
  //   // console.log(url)
  //   const data? = new Formdata?();
  //   data?.append("file", file);
  //   data?.append("upload_preset", "pc-images");
  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/dyodnn524/image/upload",
  //     {
  //       method: "POST",
  //       body: data?,
  //     }
  //   );
  //   const img = await res.json();
  //   setImgPrev([img.secure_url]);
  // };

  console.log(userProfile)
  
  return (
    <div className={style.containerGlobal}>
      <Navbar />


      {/* <div className={styles.wrapinput}>
                <label htmlFor="inputTag" className={styles.upload}>
                  <i class="uil uil-image-plus"></i>
                  <span className={styles.labelimg}>Imagen</span>
                </label>
                <input
                  id="inputTag"
                  className={`${styles.formInput} ${styles.inputimg}`}
                  name={"uploads"}
                  accept="image/png, image/jpg, image/jpeg"
                  type={"file"}
                  onChange={uploadImage}
                />
                {imgPrev.length ? (
                  <img
                    src={imgPrev.length ? imgPrev : null}
                    alt="img"
                    className={styles.imgprev}
                  />
                ) : (
                  <div className={styles.block}></div>
                )}
              </div> */}



      <div className={style.cardUser}>
        <div className={style.headProfile}>
          <img
            src={fakePeople1}
            alt="fakePeople1"
            className={style.imgProfile}
          />
          <div>
            <h3>
              Hola! <strong>{userProfile.data?.userName}</strong>
            </h3>
            <p>Premium</p>
          </div>
        </div>

        <div className={style.acordeonContainer}>
          <Accordion defaultActiveKey="0" flush className={style.acordeon}>
            <Accordion.Item eventKey="0" className={style.eachItem}>
              <Accordion.Header><PersonIcon/> Mis Datos </Accordion.Header>
              <Accordion.Body className={style.insideItem}>
                <div>
                  <h3 className={style.subtitle}>Account data</h3>
                  <div>
                    <span>UserName:</span>
                    <CardProfle name={userProfile.data?.userName} />
                  </div>
                  <div>
                    <span>Email:</span>
                    <CardProfle name={userProfile.data?.email} />
                  </div>
                  <h3 className={style.subtitle}>Personal data</h3>
                  <div>
                    <span>Name:</span>
                    <CardProfle name={userProfile.data?.firstName + ' ' + userProfile.data?.lastName} />
                  </div>
                  <div>
                    <span>Phone Number:</span>
                    <CardProfle name={userProfile.data?.phone ? userProfile.data?.phone : "Sin numero"} />
                  </div>
                  <div>
                    <span>Birthday:</span>
                    <CardProfle name={userProfile.data?.birthday ? userProfile.data?.birthday : "Sin numero"} />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><CreditCardIcon/> Mis Tarjetas </Accordion.Header>
              <Accordion.Body>
                
                <CardProfle name={"************** 3479"} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><HomeIcon/> Direcciones </Accordion.Header>
              <Accordion.Body>
                
                <CardProfle name={userProfile.data?.address ? userProfile.data?.address : "No hay niguna direccion"} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header><CommentIcon/> Reviews </Accordion.Header>
              <Accordion.Body>
                
                <CardProfle name={"Rating 1"} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header><ShoppingBagIcon/> Compras </Accordion.Header>
              <Accordion.Body>
                
                <CardProfle name={"Mother ASUS "} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
