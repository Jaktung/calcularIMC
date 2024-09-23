import styles from "./Formulario.module.css"

const Formulario = (props) => {
        return(
          <div>
            <label>
              Altura <span className={styles.formSpan}>(m)</span>
              <input className={styles.formInput} type="number" placeholder="Digite sua Altura" required value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
            </label>
            <br />
            <label className={styles.peso}>
              Peso <span className={styles.formSpan}>(kg)</span>
              <input className={styles.formInput} type="number" placeholder="Digite seu Peso" required value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/>
            </label>
          </div>
        )
    } 
      
     


export default Formulario