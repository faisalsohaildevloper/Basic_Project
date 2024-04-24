import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'



import 'bootstrap/dist/css/bootstrap.min.css'
import App from './real/App'
import Parent from './real/useContext'
// import App from './simpleExample/App'
// import App from './example/App'
// import PasaProvider from './simpleExample/context/usePaisa'




ReactDOM.createRoot(document.getElementById('root')).render(
  <Parent>
    <App />
  </Parent>,
)
