import React, {useState} from "react"

import TabelaIMC from "./components/Tabela"
import Formulario from "./components/Formulario"
import Resultado from "./components/Resultado"

function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [resultado, setResultado] = useState(0)

  return(
    <div>
      <Formulario a={altura} sa={setAltura} p={peso} sp={setPeso}/>
      <TabelaIMC/>
      <Resultado a={altura} p={peso} sr={setResultado} r={resultado}/>
    </div>
  )
}


export default App