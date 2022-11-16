import React from "react";
import s from "./Faq.module.css";
import { Navbar, Footer } from "../../components";
function Faq() {
  return (
    <div>
      <Navbar />
      <div className={s.contanierGlobal}>
        <div>
          <h2>FAQ</h2>
        </div>
        <div>
          <div>
            <h3>¿El precio que figura en la web es el precio final?</h3>
            <p>
              Todos los precios en la web incluyen el IVA, y se encuentran
              expresados en pesos argentinos.
            </p>
          </div>
          <div>
            <h3>¿Cuáles son las formas de pago?</h3>
            <p>
              {" "}
              Puedes pagar con tu tarjeta de debito/crédito a traves de stripe.
            </p>
          </div>
          <div>
            <h3>¿Cómo realizo un pedido?</h3>
            <p>
              {" "}
              Selecciona los productos que prefieras, estos productos los podras
              agregar al carrito de compras. Posteriormente das click en el
              boton del carrito de compras y podras conocer el detalle de tu
              compra. Puedes cambiar la cantidad de cada item y al darle al boton "Checkout"
              te mandara a la pagina de compra, donde ingresaras tus datos para
              realizar tu compra. Al final recibiras un mail con el detalle de
              tu compra.
            </p>
          </div>
          <div>
            <h3>¿Cómo armo mi Pc?</h3>
            <p>
              {" "}
              El armado de pc ofrece una guia intuitiva para cada tipo de
              persona. Primero debes seleccionar entre que marca elejir tu tipo
              de pc (AMD o Intel). Luego podras elejir la gama de tu computador:
              <br/>
              <ul>
                <li>
                  WorkOffice: Es nuestra gama básica para trabajar con programas
                  sencillos
                </li>
                <li>
                  Gaming: Es nuestra gama media con mejores prestaciones y más
                  potencia
                </li>
                <li>
                  Professional - Gaming: Es nuestra gama avanzada con muchos más
                  requerimientos, mayor potencia y graficos avanzados
                </li>
                <li>
                  Gaming & Streaming: Es nuestra gama ultra avanzada para
                  personas que juegan profesionalmente y hacen streaming,
                  contiene los mas altos rendimientos y ofrece una alta
                  potencia, con esta pc podras correr cualquier juego sin
                  problemas. Recomendado para streaming.
                </li>
              </ul>
              Una vez que seleccionas alguna de las gamas podras navegar entre
              los distintos componentes, deberas elejir como minimo un
              procesador y una tarjeta madre, cuando le des click al boton
              "checkout" te dira si estos dos componentes son compatibles,
              podras elejir solamente uno de cada categoria,si deseas agregar
              más podras hacerlo desde la pagina del carrito de compra.
            </p>
          </div>
          <div>
            <h3>¿Como guardo mis componentes favoritos?</h3>
            <p>
              {" "}
              Primero debes tener una sesion iniciada (Puedes ingresar mediante
              el boton "Iniciar Sesion").En la pagina de "productos" en cada
              tarjeta de cada componente te aparecera un icono para guardar en
              favoritos, simplemente da click y se guardaran en la pagina "❤".{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
