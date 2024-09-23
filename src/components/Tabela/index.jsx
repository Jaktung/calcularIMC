import styles from "./Tabela.module.css"

const TabelaIMC = () => {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableTitle}>
              Classificação
            </th>
            <th className={styles.tableTitle}>
              IMC
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.tableItem}>
              Menor que 18,5
            </td>
            <td className={styles.tableItem}>
              Magreza
            </td>
          </tr>
          <tr>
            <td className={styles.tableItem}>
              18,5 a 24,9
            </td>
            <td className={styles.tableItem}>
              Normal
            </td>
          </tr>
          <tr>
            <td className={styles.tableItem}>
              25 a 29,9
            </td>
            <td className={styles.tableItem}>
              Sobrepeso
            </td>
          </tr>
          <tr>
            <td className={styles.tableItem}>
              30 a 34,9
            </td>
            <td className={styles.tableItem}>
              Obesidade grau I
            </td>
          </tr>
          <tr>
            <td className={styles.tableItem}>
              35 a 39,9
            </td>
            <td className={styles.tableItem}>
              Obesidade grau II
            </td>
          </tr>
          <tr>
            <td className={styles.tableItem}>
              Maior que 40
            </td>
            <td className={styles.tableItem}>
              Obesidade grau III
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  export default TabelaIMC