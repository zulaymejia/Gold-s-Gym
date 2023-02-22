import React from 'react'
import facebook from "../../images/face.png";
import twitter from "../../images/twi.png";
import instagram from "../../images/instagram.png";
import line from "../../images/linegray.png"
import "./Footer.css" 
import logoo from "../../images/logoo.png"

function Footer() {
  return (
    <div>
        <div>
      <hr id="linea-main" />
      <footer id="container-footer">
        <div className="">
        <img src={logoo} width="100" alt="Gold's Gym"/>
          <p className="text-footer">¿QUIENES SOMOS?</p>
          <p className="text-footer">PLANES</p>
          <p className="text-footer">SEDES</p>
        </div>
        {<img src={line} id="line-footer" alt="line" /> }
        <div className="contacts">
          <p className="text-footer">CONTACTO</p>
          <p className="text-footer">AYUDA</p>
          <p className="text-footer">CÓMO COMPRAR</p>
          <p className="text-footer">TÉRMINOS & CONDICIONES</p>
        </div>
        {<img src={line} id="line-footer-one" alt="line" /> }
        <div className="purchase">
          <p className="text-footer">SEDES</p>
          <p className="text-footer">BOGOTÁ</p>
          <p className="text-footer">MEDELLIN</p>
          <p className="text-footer">CALI</p>
        </div>
        {<img src={line} id="line-footer-two" alt="line" /> }
        <div className="follow-us">
          <p className="text-footer">SEGUINOS EN</p>
           <a href="https://www.flaticon.es/iconos-gratis/tarjeta-vip"
          title="tarjeta vip iconos  "   className='enlace'><img src={facebook} width="50" alt="Gold's Gym" /></a>
            <a href="https://twitter.com/home"
          title="tarjeta vip iconos  "   className='enlace'><img src={twitter} width="50" alt="Gold's Gym" /></a>
             <a href="https://www.flaticon.es/iconos-gratis/tarjeta-vip"
          title="tarjeta vip iconos  "   className='enlace'><img src={instagram} width="50" alt="Gold's Gym" /></a>
           </div>
      </footer>
      <hr id="linea-main-one" />
      <p id="text">GOLD S GYM - Todos los derechos reservados</p>
    </div>
    </div>
  )
}

export default Footer