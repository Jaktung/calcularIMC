import styles from './Tabela.module.css'

const Tabela = () => {
    return (
        <table className={styles.tabela}>
            <thead>
                <tr>
                    <th className={styles.itemTabela}>
                        IMC
                    </th>
                    <th className={styles.itemTabela}>
                        Classificação
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.itemTabela}>
                        MENOR QUE 18,5
                    </td>
                    <td className={styles.itemTabela}>
                        MAGREZA
                    </td>
                </tr>
                <tr>
                    <td className={styles.itemTabela}>
                        ENTRE 18,5 E 24,9
                    </td>
                    <td className={styles.itemTabela}>
                        NORMAL
                    </td>
                </tr>
                <tr>
                    <td className={styles.itemTabela}>
                        ENTRE 25,0 E 29,9
                    </td>
                    <td className={styles.itemTabela}>
                        SOBREPESO
                    </td>
                </tr>
                <tr>
                    <td className={styles.itemTabela}>
                        ENTRE 30,0 E 39,9
                    </td>
                    <td className={styles.itemTabela}>
                        OBESIDADE
                    </td>
                </tr>
                <tr>
                    <td className={styles.itemTabela}>
                        MAIOR QUE 40,0
                    </td>
                    <td className={styles.itemTabela}>
                        OBESIDADE GRAVE
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela