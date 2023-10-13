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
                        <h1>Especialistas em Lentes de Contato – RJ</h1>
                        <p>
                           Contatólogos e Oftalmologistas especialistas em lentes de contato no Rio de Janeiro. Seja atendido por quem é referência na área. Entenda a importância de se consultar com um contatólogo ou médico oftalmologista especializado em lentes de contato e confira nossa equipe de especialistas abaixo.                        
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

        <Breadcrum to={'/especialidades'} title={' especialidades / Especialistas em Lentes de Contato – RJ '}/>

        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <div className='row'>
               <p>
                  Fazer tratamento com oftalmologistas especialistas em lentes de contato é importante porque esses médicos possuem conhecimento especializado sobre as lentes de contato e estão preparados para ajudar os pacientes a encontrar as lentes de contato mais adequadas para suas necessidades oculares.
               </p>
               <p>
                  As lentes de contato são um tipo de dispositivo de correção de visão que são usadas para corrigir erros refrativos, como a miopia, a hipermetropia e o astigmatismo. Existem vários tipos de lentes de contato, incluindo lentes de contato rígidas, lentes de contato macias e lentes de contato tóricas.
               </p>
               <p>
                  Os especialistas em lentes de contato podem avaliar a condição dos olhos dos pacientes e recomendar lentes de contato específicas de acordo com as necessidades dos pacientes. 
               </p>
               <p>
                  Além disso, os oftalmologistas especialistas em lentes de contato podem fornecer instruções sobre como usar e cuidar das lentes de contato de maneira correta para garantir a saúde ocular.
               </p>
               <p>
                  Outra razão pela qual é importante fazer tratamento com especialistas em lentes de contato é que esses profissionais podem ajudar a prevenir ou minimizar os problemas de saúde ocular que podem resultar do uso de lentes de contato. Por exemplo, se as lentes de contato não são usadas ou mantidas de maneira adequada, podem ocorrer infecções oculares ou outros problemas de saúde. 
               </p>
               <p>
                  Os especialistas em lentes de contato podem orientar os pacientes sobre como evitar esses problemas e garantir que os olhos fiquem saudáveis durante o uso de lentes de contato.
               </p>
            </div>
        </div>


        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <Button title={'Nossos oftalmologistas especialistas em Lentes de Contato'} id={11}/>
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