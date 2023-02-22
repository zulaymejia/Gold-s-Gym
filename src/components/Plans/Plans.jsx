import React from 'react'
import "./Plans.css" 
import zona from "../../images/vip1.2.png"
import zona2 from "../../images/basico.png"

function Plans() {
  return ( <div className='containerplans'>
      <h2 className='titulo'>Afiliate a uno de nuestros Planes</h2>
<div class="card-group">
  <div class="card">
  {<img src={zona2} className="imagenes" alt="" /> } 
    <div class="card-body">
      <h5 class="card-title">EASY</h5>
      <p class="card-text">$ 59.900/Mes
Mantenimiento anual $ 49.900
Inscripción $ 0
Hoy pagas $ 119.800
Precio más bajo del mercado cuota de inscripción gratis del 1 al 28 de febrero de 2023.
Zona cardio, Musculación, Cinema cardio, Máquinas de musculación y de cardio,Zona funcional,
App Athletic: Rutinas de entrenamiento y más.
Asegura tu entrenamiento (Plan de Débito Mensual).
Ten en cuenta: En tu primer pago se realizará un cobro de dos meses por anticipado.
</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    <a href="https://www.flaticon.es/iconos-gratis/tarjeta-vip" title="tarjeta vip iconos  "   className='enlace'>Tarjeta vip iconos creados por Freepik - Flaticon</a>
  </div>
  <div class="card">
  {<img src={zona} className="imagenes" alt="" /> } 
    <div class="card-body">
      <h5 class="card-title">VIP</h5>
      <p class="card-text">$ 69.900/Mes
Mantenimiento anual $ 49.900
Inscripción $ 0
Hoy pagas $ 139.800
Acceso con un amigo gratis los días: viernes, sábado y domingo, acceso a la zona VIP, acceso a los otros gimnasios de la red
Cuota de inscripción gratis del 1 al 28 de febrero de 2023
Zona cardio, Musculación, Cinema cardio, Máquinas de musculación y de cardio, Zona funcional, App Athletic: Rutinas de entrenamiento y más.
Asegura tu entrenamiento (Plan de Débito Mensual)
Ten en cuenta: En tu primer pago se realizará un cobro de dos meses por anticipado.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    <a href="https://www.flaticon.es/iconos-gratis/tarjeta-vip" title="tarjeta vip iconos" className='enlace'>Tarjeta vip iconos creados por Freepik - Flaticon</a>
  </div>
  <div class="card" >
  {<img src={zona2} className="imagenes" alt="" /> } 
    <div class="card-body">
      <h5 class="card-title">VIP ANUAL</h5>
      <p class="card-text">$ 599.000/Año
Valor mes $ 49.916,67
Mantenimiento anual $ 0
Inscripción $ 0
Acceso con un amigo gratis los días: viernes, sábado y domingo, acceso a la zona VIP, acceso a los otros gimnasios de la red
Cuota de inscripción gratis del 1 al 28 febrero de 2023
12 meses de entrenamiento en sede (El mes sale a: $49.916)
Ahorra $ 119.800 al año.
Zona cardio, Musculación, Cinema cardio, Máquinas de musculación y de cardio, Zona funcional y App Athletic: Rutinas de entrenamiento y más.
</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    <a href="https://www.flaticon.es/iconos-gratis/tarjeta-vip" title="tarjeta vip iconos" className='enlace'>Tarjeta vip iconos creados por Freepik - Flaticon</a>
  </div>
</div>
    </div>
  )
}

export default Plans