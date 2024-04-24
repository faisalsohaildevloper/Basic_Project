import React, { useContext } from 'react'
import { pasaContext2 } from '../context/usePaisa2'

const  B
 = () => {
const [pasa] = useContext(pasaContext2)
  return (
    <div>
      B- {pasa}
    </div>
  )
}

export default B
 