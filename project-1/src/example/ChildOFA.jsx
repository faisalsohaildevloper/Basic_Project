import React, { useContext } from 'react'
import { DadaContext } from './useContext'


const ChildOFA = () => {
  const [pesa,setPesa]=useContext(DadaContext)

  return (
    <div>ChildOFA-{pesa}</div>
  )
}

export default ChildOFA