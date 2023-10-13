import styles from '../../styles/doctorSimple.module.sass'

import circle from '/public/images/circle.png'

import axios from 'axios'
import {useRouter} from 'next/router'
import formatarCRM from '../../pipes/crm.pipe'

const DoctorPage = ({data}) => {
    const router = useRouter()
    const idDocRender = router.asPath.split('/')[2]
    const docList = data?.filter(doc => doc.id === idDocRender)
    const docSelected = docList[0]
    if (docSelected === [] || docSelected === null || docSelected === undefined) {
        router.route = '/404'
    }
    return (
        <>
            <div className={styles.SimpleContainer}>
                <div className={'container-xl d-flex'}>
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center p-5">
                            <div
                                className={styles.docPicBorder}
                                style={{
                                    backgroundImage: `url('${docSelected?.image}')`,
                                    backgroundSize: 'contain',
                                    width: '244px',
                                    height: '268px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'flex-end'
                                }}
                            >
                                <img
                                    src={circle.src}
                                    style={{
                                        width: '320px',
                                        height: '320px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className={styles.infoDoc}>
                                <div className="col-12 d-flex flex-column">
                                    <h2>Dr(a) {docSelected?.name}</h2>
                                    <div className={'d-flex'}>
                                        <p>CRM/RJ: {formatarCRM(docSelected?.crm)} </p>

                                        <p className={'mx-5'}>
                                            RQE: {docSelected?.rqe ? docSelected?.rqe : ''}
                                        </p>
                                    </div>
                                    <span className={styles.Line}></span>
                                    <p className={styles.especialidades}>Especialidades</p>
                                    <div className={styles.boxEspecialidades}>
                                        {docSelected?.especialidadeonmedico?.map(doc => (
                                            <span>{doc?.especialidades?.especialidade}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className={styles.marqueConsulta}>
                                    <div className={styles.boxMarque}>
                                        <p>Marque sua consulta</p>
                                    </div>
                                    <p className={styles.textUnidade}>Unidades de atendimento</p>
                                    <div className={styles.lineMarque}></div>
                                    <div className={styles.unidadesAtend}>
                                        {docSelected?.listaCalendar?.map(cal => (
                                            <p>{cal?.unidade}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={
                    'container d-flex justify-content-center align-items-center flex-column'
                }
            >
                <div className='row'>
                    <h3>Trabalhos Publicados, Aulas, Palestras e Apresentação de Casos:</h3>
                    <br/>
                    <p>{docSelected?.trabalhos}</p>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const API_KEY = process.env.API_TOKEN
    const API_URL = process.env.BASE_URL
    const dataToSend = {
        token: API_KEY
    }

    const response = await axios.post(`${API_URL}/medico`, dataToSend)
    const data = response.data

    return {
        props: {
            data
        }
    }
}

export default DoctorPage
