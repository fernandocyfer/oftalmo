
import styles from "/styles/cardConvenio.module.sass";
import convDefault from "/public/logo/convResult.svg"
import Image from 'next/image'

const CardConvResult = ({scr = convDefault}) => (
    <div className={styles.cardConvResult}>
        <div className={styles.boxDesc}>
            <h4>Amil</h4>
            <p>Possuímos uma equipe de médicos preparada para atender pacientes do plano AMAFRERJ.</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="138" viewBox="0 0 2 138" fill="none">
            <path d="M1 0V138" stroke="#CFCFCF" stroke-opacity="0.15" stroke-width="2"/>
        </svg>
        <div className={styles.boxLogo}>
            <span>CONVÊNIOS</span>
            <div className={styles.logo}>
                <Image src={scr}/>
            </div>
        </div>
    </div>
)


export default CardConvResult;
