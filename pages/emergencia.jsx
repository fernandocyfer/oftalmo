import Banner from '../components/Banner/Banner'
import Unidade from '../public/images/UnidadeBotafogoSulFoto.svg'
import Line from '../public/images/line.svg'
import styles from '../styles/emergency.module.sass'
import {Button} from '../components/Button/Button'
import Image from 'next/image'
import Faq from '../components/Faq/faq'
import FormAtendimento from '../components/FormAtendimento/FormAtendimento'

const emergencia = () => (
    <>
        <Banner id={5}>
            <div className={styles.Hero}>
                <h2>Emergência Oftalmológica</h2>
                <p>
                    Todas as nossas unidades prestam atendimento de emergência. Este
                    acontece através da modalidade "encaixe", isto é, o paciente será
                    atendido entre os que estão agendados na grade de horários. <br/>
                    <br/>
                    Nestes atendimentos, não é realizado o exame de grau, isto é, o
                    paciente não sai com prescrição de óculos. Eles são exclusivamente
                    para tratar dores, doenças e queixas sintomáticas.
                </p>
            </div>
        </Banner>
        <div className={'container-md'}>
            <div className="d-flex justify-content-center">
                <div className={'row'}>
                    <div className={'col'}>
                        <div className={styles.unidadeEmergencia}>
                            <div className={styles.sectionOne}>
                                <h4>Plantão 24H</h4>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="202"
                                    height="2"
                                    viewBox="0 0 202 2"
                                    fill="none"
                                >
                                    <path
                                        d="M1 1H201"
                                        stroke="url(#paint0_radial_2785_22175)"
                                        stroke-opacity="0.6"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                    />
                                    <defs>
                                        <radialGradient
                                            id="paint0_radial_2785_22175"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(100.998 1.00123) rotate(94.0282) scale(213.523 56024.1)"
                                        >
                                            <stop offset="0.307292" stop-color="#007AFF"/>
                                            <stop
                                                offset="0.651042"
                                                stop-color="#FF0013"
                                                stop-opacity="0.8"
                                            />
                                            <stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                                <p>
                                    Na unidade Botafogo temos o plantão oftalmológico, que
                                    acontece nos horários em que as clínicas estão fechadas.
                                    Portanto, temos atendimento todas as noites, aos sábados,
                                    domingos e feriados.
                                </p>
                            </div>
                            <div className={styles.sectionTwo}>
                                <div>
                                    <div className={'d-flex flex-column'}>
                                        <span>Funcionando 24 horas</span>
                                        <Image src={Unidade.src} width={251} height={134}/>

                                        <Button title={' Ver no mapa'} id={8}/>

                                        <div style={{
                                            width: "202px",
                                            height: "2px",
                                            backgroundImage: `url(${Line})`,
                                            backgroundSize: "contain"
                                        }}>
                                        </div>

                                        <p>Unidade Botafogo - Zona Sul</p>
                                        <Button title={'Emergência Oftalmologica'} id={15}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Faq/>

        <FormAtendimento hasContact={false}/>
    </>
)

export default emergencia
