// Function
import { useState } from "react";
import { getTheme } from "../utils/getTheme";



const useTheme = () => {

  const [value, setValue] = useState (getTheme());



  const themeHandler = (e) =>{
    setValue(e.target.value)
    localStorage.setItem('theme', e.target.value)
    
  }
  return {
    value, themeHandler
  }
}

export default useTheme