import React from 'react'
import "./Home.css" 
import zona from "../../images/treadmill.png"
import zonaM from "../../images/musculos.png"
import ejercicio from "../../images/ejercicio.png"
import mancuernas from "../../images/mancuernas.png"


function Home() {
  return (
  <div className='home-body'>
     < h1 className='titulos'>¿Quienes somos?</h1>
   <div className='parrafos'>
      <p>Somos un gimnasio que llegó a revolucionar la experiencia de entrenar en Colombia.</p>
   </div>
    <div className='parrafos'>
      <h2 className='titulos'>Zona Cardio</h2>
        {<img src={zona} className="" alt="" /> } 
         <p>No esperes por una caminadora, contamos con 100 maquinas de cardio disponibles para ti.</p>
  </div> 
  <div className='parrafos'>
      <h2  className='titulos'>Zona Muscular</h2>
        {<img src={zonaM} className="" alt="" /> } 
         <p>Encuentra 100 equipos de última tecnología listos para poder estallar toda tu fuerza.</p>
   </div>
   <div className='parrafos'>
      <h2  className='titulos'>Zona Vip</h2>
        {<img src={mancuernas} className="" alt="" /> } 
         <p>Espacios y equipos especializados en relajación física, equilibrio mental.</p>
    </div>  
    <div className='parrafos'>
       <h2  className='titulos'> Cine  Cardio</h2>
         {<img src={ejercicio} className="" alt="" /> } 
          <p>Es un espacio diferente a todos para disfrutar de una película mientras quemas calorías.</p>
    </div>
   </div>
   )
}

export default Home