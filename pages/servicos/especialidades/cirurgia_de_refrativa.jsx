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
                        <h1>Especialistas em Cirurgia Refrativa – RJ</h1>
                        <p>
                        Oftalmologistas especialistas no tratamento de Erros Refrativos, através da cirurgia refrativa, no Rio de Janeiro. Seja atendido por quem é referência na área. Entenda a importância de se consultar com um médico oftalmologista especializado em cirurgia refrativa e confira nossa equipe de especialistas abaixo.                        </p>
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

        <Breadcrum to={'/especialidades'} title={' especialidades / Especialistas em Cirurgia Refrativa – RJ '}/>

        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <div className='row'>
               <p>
                  Consultar-se com médicos oftalmologistas especialistas em cirurgia refrativa é importante porque esses médicos possuem conhecimento especializado sobre as técnicas cirúrgicas utilizadas para corrigir problemas de visão, como miopia, hipermetropia e astigmatismo. 
               </p>
               <p>
                  A cirurgia refrativa é um procedimento delicado que exige habilidades especializadas, e os médicos especialistas em cirurgia refrativa estão mais preparados para garantir os melhores resultados possíveis.
               </p>
               <p>
                  Além disso, os oftalmologistas especialistas em cirurgia refrativa estão familiarizados com as últimas técnicas e tecnologias utilizadas no procedimento, o que pode aumentar a eficácia da cirurgia e diminuir o tempo de recuperação. 
               </p>
               <p>
                  Esses médicos também sabem como avaliar a candidatura de cada paciente à cirurgia refrativa e recomendar o procedimento mais adequado para atender às suas necessidades individuais.
               </p>
               <p>
                  Outra razão pela qual é importante realizar uma consulta com médicos oftalmologistas especialistas em cirurgia refrativa é que esses médicos podem ajudar a minimizar o risco de complicações durante o procedimento. 
               </p>
               <p>
                  A cirurgia refrativa é geralmente segura, mas como qualquer procedimento cirúrgico, existe o risco de complicações. Os médicos especialistas em cirurgia refrativa são treinados para identificar e gerenciar essas complicações de maneira eficaz para garantir a segurança dos pacientes.
               </p>
            </div>
        </div>


        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <Button title={'Nossos oftalmologistas especialistas em Cirurgia de Refrativa'} id={11}/>
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