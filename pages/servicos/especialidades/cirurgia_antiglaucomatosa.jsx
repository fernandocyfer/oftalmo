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
                        <h1>Especialistas em Glaucoma – RJ</h1>
                        <p>
                           Oftalmologistas especialistas no tratamento de glaucoma no Rio de Janeiro. Seja atendido por quem é referência na área. Entenda a importância de se consultar com um médico oftalmologista especializado em glaucoma e confira nossa equipe de especialistas abaixo.                        
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

        <Breadcrum to={'/especialidades'} title={' especialidades / Especialistas em Glaucoma – RJ '}/>

        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <div className='row'>
               <p>
               O glaucoma é uma doença ocular que afeta milhões de pessoas em todo o mundo e pode levar à cegueira se não for tratada adequadamente. 
               </p>
               <p>
               De acordo com a Organização Mundial de Saúde (OMS), o glaucoma é a segunda principal causa de cegueira em todo o mundo, responsável por cerca de 12% dos casos de cegueira em todo o mundo. 
               </p>
               <p>
               No Brasil, o glaucoma é uma das principais causas de cegueira e afeta cerca de 2,5 milhões de brasileiros.
               </p>
               <p>
               É importante procurar um médico oftalmologista especializado em glaucoma para garantir os melhores resultados e minimizar o risco de complicações. 
               </p>
               <p>
               Tratar o glaucoma com médicos oftalmologistas especialistas em glaucoma é importante porque esses médicos possuem conhecimento especializado sobre as doenças e condições que afetam o nervo óptico e estão preparados para diagnosticar e tratar essas condições de maneira eficaz.
               </p>
               <p>
               Os médicos oftalmologistas especialistas em glaucoma são treinados para diagnosticar e tratar essas condições de maneira eficaz. Eles podem prescrever medicamentos ou realizar cirurgias oculares para ajudar a controlar a pressão intraocular e preservar a saúde do nervo óptico.
               </p>
               <p>
               Outra razão pela qual é importante tratar o glaucoma com médicos oftalmologistas especialistas em glaucoma é que esses médicos podem ajudar a prevenir ou minimizar os problemas de visão que podem resultar de doenças e condições do nervo óptico. 
               </p>
               <p>
               Por exemplo, o tratamento precoce do glaucoma pode ajudar a evitar a perda da visão, enquanto a cirurgia de glaucoma pode ajudar a controlar a pressão intraocular e preservar a saúde do nervo óptico.
               </p>
               <p>
               Alguns sinais de que é hora de considerar a cirurgia de glaucoma incluem dificuldade para ler, percepção de cores como menos brilhantes e a necessidade de trocar frequentemente de óculos ou lentes de contato. 
               </p>
               <p>
               Se você já tem glaucoma ou suspeita de ter glaucoma, consulte um médico oftalmologista para avaliar sua condição e discutir as opções de tratamento disponíveis.
               </p>
            </div>
        </div>


        <div className={'container d-flex justify-content-center align-items-center mt-5'}>
            <Button title={'Nossos oftalmologistas especialistas em Especialistas em Glaucoma'} id={11}/>
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