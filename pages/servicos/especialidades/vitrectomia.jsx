import styles from '../../../styles/doctorSimple.module.sass'

import {Box, PaginationItem} from "@mui/material";
import MedicoConsulta from "../../../components/Medicos/MedicoConsulta";
import Pagination from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useEffect, useState} from "react";
import {getMedicos} from "../../../services/app.service";
import Banner from "../../../components/Banner/Banner";
import {Button} from "../../../components/Button/Button";
import Breadcrum from "../../../components/BreadCrumb/Breadcrum";

const Especialidade = ({data}) => {
    // const router = useRouter()
    // const idDocRender = router.asPath.split('/')[2]
    // const docList = data?.filter(doc => doc.id === idDocRender)
    // const docSelected = docList[0]
    // if (docSelected === [] || docSelected === null || docSelected === undefined) {
    //   router.route = '/404'
    // }

    const [listMedicos, setListMedicos] = useState([])
    const [page, setPage] = useState(1)
    const [listaMostrada, handleListaMostrada] = useState([])

    const handlePagination = (index, page) => {
        setPage(page)
    }

    const updatePage = () => {
        const lista = listMedicos
        const fim = page * 8
        const inicio = page * 8 - 8
        const novaLista = lista?.slice(inicio, fim)
        handleListaMostrada(novaLista)
    }

    useEffect(() => {
        updatePage()
    }, [page])

    useEffect(() => {
        const fetchMedicos = async () => {
            getMedicos()
                .then(list => {
                    setListMedicos(list)
                    handleListaMostrada(list.slice(0, 8))
                })
                .catch(error => {
                    console.log('Error: ' + error)
                })
        }
        fetchMedicos()
    }, [])

    const totalPages = listMedicos?.length === 0 ? 1 : Math.ceil(listMedicos?.length / 8)

    return (<>


        <Banner id={8}>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className={styles.Hero}>
                        <h1>Especialistas em Retina e Vítreo – RJ</h1>
                        <p>
                        Oftalmologistas especialistas em retina e vítreo no Rio de Janeiro. Seja atendido por quem é referência na área. Entenda a importância de se consultar com um médico oftalmologista especializado em retina e vítreo e confira nossa equipe de especialistas abaixo.
                        </p>
                        <div className="d-flex justify-content-around">
                            <Button
                                title={'Agendar consulta'}
                                id={10}
                                to={'https://web.whatsapp.com/send?phone=552124961161&text=Olá, desejo agendar uma consulta'}
                            />
                            <Button
                                title={'Emergência Oftalmológica'}
                                id={6}
                                to={'/emergencia'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Banner>

        <Breadcrum to={'/especialidades'} title={' especialidades / Especialistas em Retina e Vítreo – RJ '}/>

        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <div className='row'>
               <p>
                  Consultar-se com médicos oftalmologistas especialistas em Retina e Vítreo é importante porque esses médicos possuem conhecimento especializado sobre as doenças e condições que afetam essas estruturas oculares e estão preparados para diagnosticar e tratar essas condições da melhor forma.
               </p>
               <p>
                  A retina é uma camada fina de tecido sensível à luz que cobre a parte posterior do olho e envia sinais para o cérebro através do nervo óptico. O vítreo é uma estrutura gelatinosa que preenche o interior do olho e ajuda a manter sua forma.
               </p>
               <p>
                  Os médicos oftalmologistas especialistas em retina e vítreo são treinados em técnicas e procedimentos especializados para diagnosticar e recomendar o tratamento mais adequado para cada paciente, tratando problemas como degeneração da retina, descolamento de retina, doenças da retina relacionadas à diabetes, tumores da retina e doenças do vítreo.
               </p>
               <p>
                  Eles podem realizar exames para avaliar a saúde da retina e do vítreo e prescrever medicamentos ou realizar cirurgias oculares, como a vitrectomia, para ajudar a controlar doenças e condições dessas estruturas oculares e preservar a visão.
               </p>
               <p>
                  Além disso, os oftalmologistas especialistas em retina e vítreo podem orientar os pacientes sobre como prevenir a progressão dessas doenças e garantir que os olhos fiquem saudáveis após a cirurgia.
               </p>
               <p>
                  Os oftalmologistas especialistas em retina e vítreo são especialmente qualificados para realizar esses procedimentos, pois possuem conhecimento especializado sobre as técnicas cirúrgicas mais recentes e estão preparados para lidar com possíveis complicações.
               </p>
               <p>
                  Se você suspeita de ter uma doença ou condição da retina ou do vítreo, é importante consultar um médico oftalmologista especialista para avaliar sua condição.
               </p>
            </div>
        </div>


        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <Button title={'Nossos oftalmologistas especialistas em Vitrectomia'} id={11}/>
        </div>
        <div className={styles.SimpleContainer}>
            <Box spacing={2}>
                <div
                    className={'container mb-5 d-flex justify-content-between flex-wrap'}
                >
                    {listaMostrada.map((medico, i) => {
                        return <MedicoConsulta medico={medico} key={i}/>
                    })}
                </div>
                <div className={'container mb-5 d-flex justify-content-center'}>
                    <Pagination
                        count={totalPages}
                        color="primary"
                        shape="rounded"
                        page={page}
                        boundaryCount={3}
                        size="large"
                        onChange={handlePagination}
                        renderItem={item => (<PaginationItem
                            slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
                            {...item}
                        />)}
                    />
                </div>
            </Box>
        </div>
    </>)
}

// export async function getServerSideProps() {
//   const API_KEY = process.env.API_TOKEN
//   const API_URL = process.env.BASE_URL
//   const dataToSend = {
//     token: API_KEY
//   }
//
//   const response = await axios.post(`${API_URL}/medico`, dataToSend)
//   const data = response.data
//
//   return {
//     props: {
//       data
//     }
//   }
// }

export default Especialidade