import Banner from '/components/Banner/Banner'
import styles from '/styles/servicos.module.sass'

import {Button} from '/components/Button/Button'
import Breadcrumb from '/components/BreadCrumb/Breadcrum'
import Search from '/components/Search/Search'

import Faq from '/components/Faq/faq'
import FormAtendimento from '/components/FormAtendimento/FormAtendimento'
import {useEffect,useState} from 'react'

const Especialidades=() => {


    const listOneBk=['Anestesista','Catarata','Ceratocone','Cirurgia Refrativa (Correção de grau à laser','Córnea','Diretor Médico','Diretora Médica','Estética','Estrabismo','Glaucoma','Lentes de Contato']

    const listTwoBk=['Neuroftalmologia','Oftalmogeriatria','Oftalmologia Clínica (Geral)','Oftalmopediatria','Órbita','Ortoptista','Plástica Ocular ou Oculoplástica','Retina','Retina Cirúrgica','Retina Clínica e Vítreo','Transplante de córnea','Vias Lacrimais']


    const [value,setValue]=useState('');
    const [listOne,setListOne]=useState(listOneBk);
    const [listTwo,setListTwo]=useState(listTwoBk);


    const filter=(val) => {

        setListOne(listOneBk.filter((esp) => {
            if(esp.toLocaleLowerCase().includes(val)) {
                return esp
            }
        }
        ))
        setListTwo(listTwoBk.filter((esp) => {
            if(esp.toLocaleLowerCase().includes(val)) {
                return esp
            }
        }
        ))


    }

    return (
        <>
            <Banner id={3} >
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6">
                            <div className={styles.Hero}>
                                <h2>Especialidades Oftalmológicas</h2>
                                <p>
                                    A <b>Americas Oftalmocenter</b> atende diversas especialidades
                                    oftalmológicas no Rio de Janeiro, <br />
                                    com médicos oftalmologistas especializados no tratamento de
                                    Catarata, Glaucoma, <br />
                                    Ceratocone e outras especialidades que você pode conferir
                                    abaixo.
                                </p>
                                <div className="d-flex">
                                    <Button
                                        style={{marginRight: '32px'}}
                                        title={'Agendar consulta'}
                                        id={10}
                                        to={'https://web.whatsapp.com/send?phone=552124961161&text='}
                                    />

                                    <Button title={'Emergência Oftalmológica\n'} id={6} to={'/'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Banner>
            <Breadcrumb
                to={'/servicos/especialidades'}
                title={'servicos / especialidades'}
            />
            <Search handleChange={filter}>
                <div className={'d-flex flex-column'}>
                    {
                        listOne.map((esp,i) => {
                            return (<Button id={7} title={esp} />)
                        })
                    }
                </div>
                <div className={'d-flex flex-column'}>
                    {
                        listTwo.map((esp,i) => {
                            return (<Button id={7} title={esp} />)
                        })
                    }
                </div>
            </Search>
            <Faq id={3} />
            <FormAtendimento hasContact={false} />
        </>
    )
}
export default Especialidades

