import React from 'react'
import Home from '../Home/Home';
import Plans from '../Plans/Plans';
import Card from "../Card/Card";

import Carousell from '../Carousel/Carousell';
import { Carousel } from 'bootstrap';

function Navegation() {
  return (
    <div>
      <Carousell/>
      <Home />
      <Plans />
      <Card />

    </div>
  )
}

export default Navegation