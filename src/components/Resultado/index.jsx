const Resultado = (props) => {
    const calc = () => {
        props.sr(props.p/(props.a*props.a))
    }

    return(
        <>
            <button onClick={calc}>Calcular</button>
            <p>Resultado: {props.r.toFixed(2)}</p>
        </>
    )
  }

export default Resultado
