import React from 'react'
import "./Card.css" 
import zona from "../../images/moveupfitness728.jpg"
import zona1 from "../../images/gimnasios-en-bogota-6.jpg"
import zona3 from "../../images/moveupfitness728.jpg"
import zona4 from "../../images/zona4.jpeg"

function Card() {
  return (
    <div className='containercard'>
       <h2 className='titulo2'>Conoce nuestras Sedes</h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card2">
        {<img src={zona} className="fotos" alt="" /> } 
        <div class="card-body">
          <h5 class="card-title">Bogotá</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card2">
      {<img src={zona1} className="fotos" alt="" /> } 
        <div class="card-body">
          <h5 class="card-title">Medellin</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card2">
      {<img src={zona3} className="fotos" alt="" /> } 
        <div class="card-body">
          <h5 class="card-title">San Andres</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card2">
      {<img src={zona4} className="fotos" alt="" /> } 
        <div class="card-body">
          <h5 class="card-title">Cali</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Card