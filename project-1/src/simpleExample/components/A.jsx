import React, { useContext } from 'react'
import { pasaContext } from '../context/usePaisa'
import A1 from './A1'


const A = () => {
  const[pasa,setPasa]= useContext(pasaContext)


  return (
    <div>A={pasa}- <button onClick={()=> setPasa(pasa + 10)}>INC</button>
    
    <A1/>
    </div>
  )
}

export default A