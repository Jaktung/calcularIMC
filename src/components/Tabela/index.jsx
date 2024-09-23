const TabelaIMC = () => {
    return (
      <table border='1' style={{borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th>
              Classificação
            </th>
            <th>
              IMC
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Menor que 18,5
            </td>
            <td>
              Magreza
            </td>
          </tr>
          <tr>
            <td>
              18,5 a 24,9
            </td>
            <td>
              Normal
            </td>
          </tr>
          <tr>
            <td>
              25 a 29,9
            </td>
            <td>
              Sobrepeso
            </td>
          </tr>
          <tr>
            <td>
              30 a 34,9
            </td>
            <td>
              Obesidade grau I
            </td>
          </tr>
          <tr>
            <td>
              35 a 39,9
            </td>
            <td>
              Obesidade grau II
            </td>
          </tr>
          <tr>
            <td>
              Maior que 40
            </td>
            <td>
              Obesidade grau III
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  export default TabelaIMC