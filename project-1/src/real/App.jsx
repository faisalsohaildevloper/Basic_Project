import React, { useContext } from 'react'
import Profile from './Profile'
import Home from './Home'
import { parentContext } from './useContext'

const App = () => {

 const [auth, loading]= useContext(parentContext)
  return (
    <div>

      {!loading && <>loading...</>}
      {auth? <Profile /> : <Home />}

    </div>
  )
}

export default App