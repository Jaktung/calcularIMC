import {useState} from 'react'

const Formulario = () => {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0)

    const resultadoIMC = () => {
        const imc = peso / (altura * altura)
        return <h2>Seu IMC é: {imc.toFixed(2)}</h2>
    }

    console.log(altura)
    console.log(peso)
    console.log(resultado)

    return (
        <form>
            <label>Altura (ex: 1,74)</label>
            <input type="number" placeholder='Digite sua altura' required onChange={(e)=>setAltura(e.target.value)}/>
            <label>Peso (ex: 70)</label>
            <input type="number" placeholder='Digite seu peso' required onChange={(e)=>setPeso(e.target.value)}/>
            <button type='button' onClick={(e)=> setResultado(e.target.value)}>Calcular</button>
            <p>Resultado: {resultadoIMC}</p> 
        </form>
    )
}

export default Formulario