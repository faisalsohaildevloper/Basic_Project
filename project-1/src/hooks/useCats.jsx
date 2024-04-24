import { useState } from "react"
const useCats = () => {

  const [cats, setCats] = useState([
    'ReactJs','NodeJs',"javaScript", 'Solidity','Microservices', 'ORM'
  ])

  const [newCats, setNewCats] = useState('')

  const addCats = e =>{
    //[... prev list, e.target.value]
    setCats([...cats, newCats])
    setNewCats("")
  }


  const changeHandler = e => {
    setNewCats(e.target.value)
  }

  return {
    cats,
    addCats,
    changeHandler,
    newCats
  }
}

export default useCats