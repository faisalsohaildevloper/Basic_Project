// variable=> CreateContext => export

import { createContext, useState } from "react";

// Provider => {children}  // Provider also a component
export const pasaContext = createContext();

const PasaProvider = ({children}) => {

  const [pasa, setPasa] = useState(1000);
  
  return <pasaContext.Provider value={[pasa,setPasa]}>
    {children}
    </pasaContext.Provider>;
};

export default PasaProvider;
