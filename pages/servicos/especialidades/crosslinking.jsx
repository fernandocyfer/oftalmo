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
                        <h1>Especialistas em Transplante de Córnea – RJ</h1>
                        <p>
                        Oftalmologistas especialistas no tratamento da córnea, através do transplante de córnea, no Rio de Janeiro. Seja atendido por quem é referência na área. Entenda a importância de se consultar com um médico oftalmologista especializado em transplante de córnea e confira nossa equipe de especialistas abaixo.
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

        <Breadcrum to={'/especialidades'} title={' especialidades / Especialistas em Transplante de Córnea – RJ '}/>

        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <div className='row'>
               <p>
                  Fazer tratamento com médicos oftalmologistas especialistas em transplante de córnea é importante porque esses médicos possuem conhecimento especializado sobre as doenças e condições que afetam a córnea e estão preparados para realizar, de forma eficaz, cirurgias de transplante de córnea.
               </p>
               <p>
                  As doenças e condições que afetam a córnea podem levar a problemas de visão sérios, como a cegueira. Os médicos oftalmologistas especialistas em transplante de córnea são treinados para realizar cirurgias de transplante de córnea para substituir a córnea danificada por uma nova córnea saudável.
               </p>
               <p>
                  O transplante de córnea é uma cirurgia complexa que exige habilidades e experiência especializadas. Os oftalmologistas especialistas em transplante de córnea possuem essas habilidades e experiência e estão preparados para realizar a cirurgia de maneira segura e eficaz.
               </p>
               <p>
                  Outra razão pela qual é importante fazer tratamento com médicos oftalmologistas especialistas em transplante de córnea é que esses médicos podem ajudar a prevenir ou minimizar os problemas de visão que podem resultar de doenças e condições da córnea. 
               </p>
               <p>
                  Por exemplo, o transplante de córnea pode ajudar a restaurar a visão em casos graves de doenças da córnea, como a ceratocone ou a esclerose de córnea.
               </p>
               <p>
                  Por essas razões, é importante fazer tratamento com médicos oftalmologistas especialistas em transplante de córnea para preservar a saúde ocular.
               </p>
            </div>
        </div>


        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <Button title={'Nossos oftalmologistas especialistas em Transplante de Córnea'} id={11}/>
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