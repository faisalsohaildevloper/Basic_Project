import React, { Children, useState } from 'react'

export const parentContext = React.createContext()

const Parent = ({children}) => {

  const [auth,setAuth] = useState(false)
  const [loading,setLoading] = useState(false)
   
  // console.log("From Parent")
// request -> backend http://locahost:8000/api/currentUser
// return const res = Yes | No

// if(res){
//   setauth(true)
//   else{
//     setauth(false)
//   }
// }

setTimeout(() => {
  setLoading(true)
  setAuth(true)
},2000)

  return (
    <parentContext.Provider value={[auth, loading ,  setAuth]} >
      {children}
    </parentContext.Provider>
  )
}

export default Parent