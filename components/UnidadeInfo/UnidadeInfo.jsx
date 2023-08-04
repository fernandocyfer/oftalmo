import Iframe from 'react-iframe'
import styles from '/styles/unidadeInfo.module.sass'
import Image from "next/image";
import unidadeIcom from '/public/icons/unidadesIcon.svg'
import {Button} from "../Button/Button";

const UnidadeInfo = ({
                         unidade
                     }) => (<>
    <div className={styles.unidadeInfo}>
        <div className={'container-md d-flex mb-5'}>
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5488336982085!2d-43.323577023884695!3d-23.003612341340215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd0a4dee30e89%3A0xcb447c3e4ccd0ba!2sAmericas%20Oftalmocenter%20-%20Oftalmologista%20na%20Barra%20da%20Tijuca!5e0!3m2!1spt-BR!2sbr!4v1689793131521!5m2!1spt-BR!2sbr"
                width="100%"
                height="320px"
                id=""
                className=""
                display="block"
                position="relative" loading="lazy"/>
        </div>
        <div className={'container-md d-flex'}>
            <div className={styles.unidadeDesc}>
                <div className={styles.titleUnidade}>
                    <Image src={unidadeIcom} width={60} height={60}/>
                    <h5>{unidade?.name}</h5>
                </div>
                <p>
                    Estamos no coração da Barra da Tijuca, no Shopping Città America. Marque sua consulta com
                    agendamento 100% online, por telefone ou até por WhatsApp.
                    <br/>
                    <br/>
                    Av. das Américas, 700, Bl 08 - Loja 104 D
                </p>
                <Button title={'Agendar consulta'} id={1}/>

            </div>
            <div className={styles.unidadeFunc}>
                <div className={styles.func}>
                    <h6>Horário de Funcionamento</h6>
                    <div className={styles.line}></div>
                    <div className={styles.boxHorario}>
                        <div className={styles.horario}>
                            <p>Segunda, terça e quarta</p>
                            <span>08:00 - 19:00</span>
                        </div>
                        <div className={styles.horario}>
                            <p>Quinta e Sexta</p>
                            <span>07:00 - 19:00</span>
                        </div>
                        <div className={styles.horario}>
                            <p>Sábado</p>
                            <span>08:00 - 17:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>)


export default UnidadeInfo;
