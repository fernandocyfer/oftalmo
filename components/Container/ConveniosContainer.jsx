
import styles from "../../styles/conveniosContainer.module.sass";
import CardConvenio from "../Cards/CardConvenio";


export default function ConveniosContainer() {
    return (
        <>
            <div className={styles.ConveniosContainer}>
                <h1>Consultas particulares e convênios</h1>
                <p>
                    Realizamos atendimentos oftalmológico de consultas particulares e convênios. Portanto, veja <br /> 
                    abaixo nossos convênios e marque sua consulta com um de nossos especialistas. <br />
                    No entanto, em caso de emergência oftalmológica, atendemos na unidade da Barra da Tijuca.
                </p>
            </div>
        </>
    )
}

