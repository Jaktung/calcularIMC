const Formulario = (props) => {
  console.log(props.p)
  console.log(props.a);
  console.log(props.r);
  console.log(props.sr);
  
  
  

        return(
          <div>
            <label>
              Altura
              <input type="text" placeholder="Digite sua Altura" required value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
            </label>
            <label>
              Peso
              <input type="text" placeholder="Digite seu Peso" required value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/>
            </label>
          </div>
        )
    } 
      
     


export default Formulario