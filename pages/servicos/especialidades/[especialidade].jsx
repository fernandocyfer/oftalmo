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
                        <h1>Especialistas em Catarata – RJ</h1>
                        <p>
                            Oftalmologistas especialistas no tratamento da catarata no Rio de Janeiro. Seja atendido por
                            quem é referência na área. Entenda a importância de se consultar com um médico
                            oftalmologista especializado em catarata e confira nossa equipe de especialistas abaixo.
                        </p>
                        <div className="d-flex justify-content-center">
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

        <Breadcrum to={'/especialidades'} title={' especialidades / '}/>

        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <p>
                A catarata é uma condição ocular que afeta milhões de pessoas em todo o mundo e pode levar à cegueira se
                não for tratada adequadamente.
                De acordo com a Organização Mundial de Saúde (OMS), a catarata é a principal causa de cegueira evitável
                em todo o mundo, responsável por mais de 50% dos casos de cegueira em todo o mundo.
                No Brasil, a catarata é uma das principais causas de cegueira e afeta cerca de 3 milhões de brasileiros.
                É importante procurar um médico oftalmologista especializado em catarata para garantir os melhores
                resultados e minimizar o risco de complicações.
                O tratamento da Catarata geralmente envolve a realização de cirurgia para remover o cristalino opaco e
                substituí-lo por uma lente artificial transparente.
                A cirurgia de Catarata é considerada segura e eficaz, mas é importante que seja realizada por um médico
                oftalmologista especialista em Catarata. Estes médicos possuem conhecimento especializado sobre as
                técnicas cirúrgicas mais recentes e estão preparados para lidar com possíveis complicações.
                Além da cirurgia, os médicos oftalmologistas especialistas em Catarata também podem orientar os
                pacientes sobre como prevenir a progressão da Catarata e garantir que os olhos fiquem saudáveis após a
                cirurgia.
                Alguns sinais de que é hora de considerar a cirurgia de catarata incluem dificuldade para ler, dirigir à
                noite ou ver televisão, percepção de cores como menos brilhantes e a necessidade de trocar
                frequentemente de óculos ou lentes de contato.
                Se você já tem catarata ou suspeita de ter catarata, consulte um médico oftalmologista para avaliar sua
                condição e discutir as opções de tratamento disponíveis. Um médico oftalmologista especialista em
                Catarata poderá fornecer a melhor abordagem para o seu caso e ajudá-lo a preservar sua visão de maneira
                eficaz.
            </p>
        </div>


        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <Button title={'Nossos oftalmologistas especialistas em catarata'} id={11}/>
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
