import React, { useContext } from 'react'
import { pasaContext } from '../context/usePaisa'

const AA1 = () => {
  const [pasa, setPasa] = useContext(pasaContext)

  return (
    <div>AA1-{pasa}</div>
  )
}

export default AA1