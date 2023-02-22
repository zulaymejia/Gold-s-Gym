import React from 'react'
import "./Carousell.css" 
import carru1 from "../../images/carru1.jpg"
import carrucel2 from "../../images/carrucel2.jpg"
import carrucel3 from "../../images/carrucel3.jpg"


function Carousell () {
  return (
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
    <img src={carru1}  className="d-block w-100" alt="..." width="900px" height="380px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='titulos3'>GOLD S GYM</h5>
        <p className='parrafos2'>Unete al mejor gimnasio de Colombia y consigue el cuerpo que siempre soñaste.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={carrucel2} class="d-block w-100" alt="..." width="900px" height="380px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='titulos3' >TENEMOS LOS MEJORES PLANES</h5>
        <p className='parrafos2'>Conoce la variedad de paquetes para que seas parte de la experiencia de Golds Gym</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={carrucel3} class="d-block w-100" alt="..." width="900px" height="380px" />
      <div className="carousel-caption d-none d-md-block">
        <h5 className='titulos3'>Conoce las sedes en Colombia</h5>
        <p className='parrafos2'>Cali, Medellin, Bogotá, San Andres
        </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div> 
  )
}

export default Carousell