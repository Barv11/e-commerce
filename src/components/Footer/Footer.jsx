import "./Footer.css";
import instragram from "./inst.png";
import facebook from "./facebook.png";
import twitter from "./gorjeo.png";

export default function Footer() {
  return (
    <div className="container-all-footer">
      <div>
        <ul className="div-footer">
          <li>
            <h5>Contacto</h5>
          </li>
          <li>wsp : +12312312313</li>
          <li>email : sdadasdasdas@gmail.com</li>
        </ul>
      </div>
      <div className="div-footer">
        <ul className="div-footer">
          <li>
            <h5>Siguenos</h5>
          </li>
          <li className="container-iconos">
            <a>
              <img src={instragram} className="icono"></img>
            </a>
            <a>
              <img src={facebook} className="icono"></img>
            </a>
            <a>
              <img src={twitter} className="icono"></img>
            </a>
            <a> </a>
          </li>
        </ul>
      </div>
      <div className="div-footer">
        <ul className="div-footer">
          <li>Legal Warning</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
        </ul>
      </div>
    </div>
  );
}
