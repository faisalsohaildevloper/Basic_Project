import React, { useContext } from "react";
import A from "./components/A";
import B from "./components/B";
import { pasaContext } from "./context/usePaisa";
import PasaProvider2 from "./context/usePaisa2";

const App = () => {
  const [pasa] = useContext(pasaContext); //consume

  return (
    <div>
      <h1>Parent App-{pasa}</h1>

      <br />

      <A />

      <br />

      <PasaProvider2>
        <B />
      </PasaProvider2>
    </div>
  );
};

export default App;
