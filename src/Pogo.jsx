
import { useState } from 'react'
import Elmer from './Elmer'
import './App.css'


import Buitrago_pokemon from './Buitrago_pokemon'



import './Rivera_seccion.css'
import Rivera_seccion from './Rivera_seccion.jsx'
import Borda from './Borda.jsx'

import TeamRocketGo from "./wilsonCarmona.jsx";


function Pogo() {

  return (
    <>
      <Elmer />
      <Borda/>

      <Buitrago_pokemon />
      <Rivera_seccion />
      <TeamRocketGo />

    </>
  )
}

export default Pogo
