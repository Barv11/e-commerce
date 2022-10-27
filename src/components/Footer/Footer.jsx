import "./Footer.css";
import instragram from "./inst.png";

export default function Footer() {
  return (
    <div className="container-all-footer">
      <div className="div-footer">
        <ul>
          <li>
            <h5>Contacto</h5>
          </li>
          <li>wsp : +12312312313</li>
          <li>email : sdadasdasdas@gmail.com</li>
        </ul>
      </div>
      <div className="div-footer">
        <ul>
          <li>
            <h5>Siguenos</h5>
          </li>
          <li>
            <a>
              <img src={instragram} className="icono"></img>
            </a>
            <a> </a>
          </li>
        </ul>
      </div>
      <div className="div-footer">sdsd</div>
      <div className="div-footer">asdasd</div>
    </div>
  );
}
