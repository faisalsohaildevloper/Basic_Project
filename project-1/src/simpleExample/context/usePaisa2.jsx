// variable=> CreateContext => export

import { createContext, useState } from "react";

// Provider => {children}  // Provider also a component
export const pasaContext2 = createContext();

const PasaProvider2 = ({children}) => {

  const [pasa, setPasa] = useState(145000);
  
  return <pasaContext2.Provider value={[pasa,setPasa]}>
    {children}
    </pasaContext2.Provider>;
};

export default PasaProvider2;
