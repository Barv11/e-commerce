import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import style from "./profileUser.module.css";
import { Navbar, Footer, CardProfle } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import fakePeople1 from "../../assets/fakePeople1.jpg";
import Accordion from "react-bootstrap/Accordion";
import { getOneUser, reviewsByUser } from "../../redux/actions";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CommentIcon from "@mui/icons-material/Comment";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CardProfileReview from "../../components/cardProfile/CardProfileReview";
import PcChatBot from "../../components/PcChatBot/PcChatBot";
import { userUpdate } from '../../redux/actions'

export default function ProfileUser() {
  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  // const userProfile = useSelector((state) => state.userProfile);
  const userFound = useSelector((state) => state.userFound);
  const userReviews = useSelector((state) => state.userReviews);

  // useEffect(() => {
  //   dispatch(getOneUser());
  // }, []);

  useEffect(() => {
    if (Object.keys(userFound).length) dispatch(reviewsByUser(userFound.id));
  }, [userFound]);


  useEffect(() => {
    if (!user.logged) redirect("/login");
  }, []);



  // UPLOAD PERFIL IMAGE

  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(image.length > 1){
      dispatch(userUpdate(image))
    }
  }, [dispatch,image])

  const uploadImage = async (e) => {
    const file = e.target.files;
    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "zpayvklx");
    setLoading(true)
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dhadvdeca/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const img = await res.json();
    setImage(img.secure_url);
    setLoading(false)
   
  };


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
          <div className={style.imgContainer}>
       <div>
                { loading 
                ? 
                (<h3>Loading...</h3>) 
                : <img
                src={userFound?.picture ? userFound.picture : image}
                alt="perfilPhoto"
                className={style.imgProfile}
              />}
              </div>
              <div>
               <input
                  id="inputTag"
                  className={style.inputImg}
                  name={"uploads"}
                  accept="image/png, image/jpg, image/jpeg"
                  type={"file"}
                  placeholder='Subir imagen'
                  onChange={uploadImage}
                />
                </div>
                </div>
          
          <div>
            <h3 className={style.name}>
              Hola! <strong>{userFound?.userName}</strong>
            </h3>
            <span className={style.role}>{userFound.role}</span>
          </div>
        </div>

        <div className={style.acordeonContainer}>
          <Accordion defaultActiveKey="0" flush className={style.acordeon}>
            <Accordion.Item eventKey="0" className={style.eachItem}>
              <Accordion.Header>
                <PersonIcon /> Mis Datos{" "}
              </Accordion.Header>
              <Accordion.Body className={style.insideItem}>
                <div>
                  <h3 className={style.subtitle}>Account data</h3>
                  <div>
                    <span>UserName:</span>
                    <CardProfle name={userFound?.userName} />
                  </div>
                  <div>
                    <span>Email:</span>
                    <CardProfle name={userFound?.email} />
                  </div>
                  <h3 className={style.subtitle}>Personal data</h3>
                  <div>
                    <span>Name:</span>
                    <CardProfle
                      name={userFound?.firstName + " " + userFound?.lastName}
                    />
                  </div>
                  <div>
                    <span>Phone Number:</span>
                    <CardProfle
                      name={userFound?.phone ? userFound?.phone : "Sin numero"}
                    />
                  </div>
                  <div>
                    <span>Birthday:</span>
                    <CardProfle
                      name={
                        userFound?.birthday ? userFound?.birthday : "Sin numero"
                      }
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <HomeIcon /> Direcciones{" "}
              </Accordion.Header>
              <Accordion.Body>
                <CardProfle
                  name={
                    userFound?.address
                      ? userFound?.address
                      : "No hay niguna direccion"
                  }
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <CommentIcon /> Reviews{" "}
              </Accordion.Header>
              <Accordion.Body>
                {userReviews?.map((el) => (
                  <CardProfileReview review={el} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <PcChatBot />
      <Footer />
    </div>
  );
}
