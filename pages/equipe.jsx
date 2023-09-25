import styles from '../styles/equipeMedica.module.sass'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import Banner from '../components/Banner/Banner'
import {Button} from '../components/Button/Button'
import Breadcrum from '../components/BreadCrumb/Breadcrum'

import Search from '../components/Search/Search'
import MedicoConsulta from '../components/Medicos/MedicoConsulta'
import Faq from '../components/Faq/faq'
import FormAtendimento from '../components/FormAtendimento/FormAtendimento'
import {useEffect,useState} from 'react'
import {getMedicos} from '../services/app.service'

import Pagination from '@mui/material/Pagination'
import {Box,PaginationItem,Stack} from '@mui/material'

export default function EquipeMedica() {
    const [listMedicos,setListMedicos]=useState([])
    const [page,setPage]=useState(1)
    const [listaMostrada,handleListaMostrada]=useState([])
    const [listaEspecialidades,handleListaEspecialidades]=useState([])
    const [especialidadeSelecionada,handleSelectEspecialidade]=useState("")
    const [listaComFiltro,handleListaComFiltro]=useState([])

    const handlePagination=(index,page) => {
        setPage(page)
    }

    const handleSelect=(e) => handleSelectEspecialidade(e)

    const search=(fired) => {
        handleListaComFiltro(listMedicos);
        findDoctorByFilter(especialidadeSelecionada)
    }

    const findDoctorByFilter=(especialidade) => {
        let novaListaFiltrada=[]

    }

    const updatePage=() => {
        const lista=listMedicos
        const fim=page*8
        const inicio=page*8-8
        const novaLista=lista?.slice(inicio,fim)
        handleListaMostrada(novaLista)
    }

    useEffect(() => {
        updatePage()
    },[page])

    useEffect(() => {
        const fetchMedicos=async () => {
            getMedicos()
                .then(list => {
                    setListMedicos(list)

                    getEspecialidadeFromList(list);
                    console.log(list);

                    handleListaMostrada(list.slice(0,8))
                })
                .catch(error => {
                    console.log('Error: '+error)
                })
        }
        fetchMedicos()
    },[])

    const totalPages=listMedicos?.length===0? 1:Math.ceil(listMedicos?.length/8)

    const getEspecialidadeFromList=(list) => {
        const listaEspecialidadesFiltrada=[];
        list.map((item) => {
            listaEspecialidadesFiltrada=[...listaEspecialidadesFiltrada,item?.especialidadeonmedico.map((esp) => (esp.especialidades.especialidade))]
        })
        const listaReduzida=listaEspecialidadesFiltrada.reduce((acc,currentValue) => acc.concat(currentValue),[]);
        const especialidadesLista=[...new Set(listaReduzida)]
        handleListaEspecialidades(especialidadesLista);
    }


    const filter=(val) => {
        handleListaMostrada(listaMostrada.filter((esp) => {
            if(esp.name.toLocaleLowerCase().includes(val)) {
                return esp
            }
        }
        ))
    }

    return (<>
        <Banner id={2}>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className={styles.Hero}>
                        <h1>Nossa equipe médica</h1>
                        <p>
                            A Americas Oftalmocenter conta com uma equipe de oftalmologistas
                            no Rio de Janeiro, prontos para realizar o tratamento em
                            diversas especialidades. Conheça os integrantes da nossa equipe
                            médica.
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
        <Breadcrum title={' Equipe Médica'} />
        <Search id={2} options={listaEspecialidades} handleSelect={handleSelect} search={search} handleChange={filter}></Search>
        <Box spacing={2}>
            <div
                className={'container mb-5 d-flex justify-content-between flex-wrap'}
            >
                {listaMostrada.map((medico,i) => {
                    return <MedicoConsulta medico={medico} key={i} />
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
                        slots={{previous: ArrowBackIcon,next: ArrowForwardIcon}}
                        {...item}
                    />)}
                />
            </div>
        </Box>

        <Faq id={2} />
        <FormAtendimento hasContact={false} />
    </>)
}
