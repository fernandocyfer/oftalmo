import styles from '../styles/unidades.module.sass'
import {Button} from '../components/Button/Button'
import Container from '../components/Container/Container'
import {Accordion} from 'react-bootstrap'
import Image from 'next/image'
import unidadeIcon from '../public/icons/unidadesIcon.svg'

import Breadcrum from '../components/BreadCrumb/Breadcrum'

import unidadeBarra from '../public/unidades/Barra.png'
import unidadeTijuca from '../public/unidades/Tijuca.png'
import unidadeBotafogoSul from '../public/unidades/Botafogo.png'
import unidadeMeier from '../public/unidades/Meier.png'

import amilLogo from '../public/logo/convenios/amil-logo.svg'
import bradescoLogo from '../public/logo/convenios/bradesco-logo.svg'
import sulamericaLogo from '../public/logo/convenios/sulamerica-logo.svg'
import saudeassimLogo from '../public/logo/convenios/saudeassim-logo.svg'
import petrobrasLogo from '../public/logo/convenios/petrobras-logo.svg'
import caixaLogo from '../public/logo/convenios/caixa-logo.svg'
import cassiLogo from '../public/logo/convenios/cassi-logo.svg'
import goldencrossLogo from '../public/logo/convenios/goldencross-logo.svg'

import allianzLogo from '../public/logo/convenios/allianz-logo.svg'
import unimedLogo from '../public/logo/convenios/unimed-logo.svg'
import valeLogo from '../public/logo/convenios/vale-logo.svg'
import embrapaLogo from '../public/logo/convenios/embrapa-logo.svg'
import mediServiceLogo from '../public/logo/convenios/mediservice-logo.svg'
import correiosLogo from '../public/logo/convenios/correios-logo.svg'
import fiosaudeLogo from '../public/logo/convenios/fiosaude-logo.svg'
import marinhaLogo from '../public/logo/convenios/marinha-logo.svg'
import amafrerjLogo from '../public/logo/convenios/amafrerj-logo.svg'
import ambepLogo from '../public/logo/convenios/ambep-logo.svg'
import camprjLogo from '../public/logo/convenios/camprj-logo.svg'
import eletrossaudeLogo from '../public/logo/convenios/eletrossaude-logo.svg'
import gamaLogo from '../public/logo/convenios/gama-logo.svg'
import lifeLogo from '../public/logo/convenios/life-logo.svg'
import mutuaLogo from '../public/logo/convenios/mutua-logo.svg'
import notredameLogo from '../public/logo/convenios/notredame-logo.svg'
import omintLogo from '../public/logo/convenios/omint-logo.svg'
import pameLogo from '../public/logo/convenios/pame-logo.svg'
import pasa2Logo from '../public/logo/convenios/pasa2-logo.svg'
import saudeLogo from '../public/logo/convenios/saude-logo.svg'
import petrodistLogo from '../public/logo/convenios/petrodist-logo.svg'
import postalsaudeLogo from '../public/logo/convenios/postalsaude-logo.svg'
import realgrandezaLogo from '../public/logo/convenios/realgrandeza-logo.svg'
import sompoLogo from '../public/logo/convenios/sompo-logo.svg'
import tempoLogo from '../public/logo/convenios/tempo-logo.svg'
import axios from 'axios'
import {useEffect,useState} from 'react'
import Faq from "../components/Faq/faq";
import Banner from "../components/Banner/Banner";
import ImageError from '../public/banner/error404.webp'
import SingleContainer from "../components/SingleContainer/SingleContainer";

export default function Unidades({data}) {

    const [listUnidades,setListUnidades]=useState([])

    useEffect(() => {
        data? setListUnidades(data):null
        console.log(listUnidades)
    },[])

    return (
        <>
            <Banner id={11}>
                <SingleContainer
                    title={'A Clínica Oftalmológica mais completa do Rio de Janeiro.'}
                    description={'Agende agora sua consulta em uma de nossas unidades. Contamos com oftalmologistas na Barra da Tijuca, Botafogo, Méier, Nova América – Del Castilho e Tijuca.'}
                >
                    <div className={'d-flex justify-content-center pt-3'}>
                        <Button title={'Agendar consulta'} id={10}
                            to={'https://web.whatsapp.com/send?phone=552124961161&text='} />
                        <Button title={'Emergência Oftalmológica'} id={6} to={'/'} />
                    </div>
                </SingleContainer>
            </Banner>
            <Breadcrum to={'unidades'} title={' Unidades'} />



            {/* <div className={styles.breadUnidades}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <a>
                                Página principal <b>/ Unidades</b>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className={styles.unidadesContainer}>
                <div className="container">
                    <div className="row">
                        {listUnidades.filter((un) => !['542f3a34-edb7-46c0-a932-144a8d5599c4','7523871b-61a9-401d-b37c-ffe5a933e80f'].includes(un.id)).map(un => {
                            return (
                                <div className="col-md-4">
                                    <div className={styles.boxUnidade}>
                                        <div className={styles.boxUm}>
                                            <div className={styles.icon}>
                                                <Image src={unidadeIcon} />
                                            </div>
                                            <div className={styles.textos}>
                                                <h4>Unidade {un.name}</h4>
                                                {
                                                    un.name=='Barra'? <p style={{fontWeight: 'bold'}}>Shopping Città América</p>:
                                                        un.name=='Tijuca'? <p style={{fontWeight: 'bold'}}> Hospital São Francisco</p>:
                                                            un.name=='Botafogo'? <p style={{fontWeight: 'bold'}}>Rua Martins Ferreira, nº 65.</p>:
                                                                un.name=='Méier'? <p style={{fontWeight: 'bold'}}>Rua Lucídio Lago, 210 (em frente ao batalhão)</p>:
                                                                    un.name=='Nova América'? <p style={{fontWeight: 'bold'}}>Shopping Nova América</p>:
                                                                        null
                                                }
                                            </div>
                                        </div>
                                        <div className={styles.boxDois}>
                                            {
                                                un.name=='Barra'? <Image src={unidadeBarra} />:
                                                    un.name=='Tijuca'? <Image src={unidadeTijuca} />:
                                                        un.name=='Botafogo'? <Image src={unidadeBotafogoSul} />:
                                                            un.name=='Méier'? <Image src={unidadeMeier} />:
                                                                un.name=='Nova América'? <Image src={unidadeMeier} />:
                                                                    <Image src={ImageError} />
                                            }
                                            <Button
                                                title={'Conheça esta unidade'}
                                                id={1}
                                                to={'/unidades/'+un.id}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.SectionFour}>
                    <Button title={'PLANOS E CONVÊNIOS'} id={1} />
                    <Container
                        title={
                            'A Americas Oftalmocenter conta com oftalmologistas especializados para iniciar seu tratamento'
                        }
                        star
                        content={
                            'Nossa equipe conta com uma equipe de médicos oftalmologistas capacitados para a realização do tratamento de diversas especialidades. Além disso, utilizamos os equipamentos mais modernos disponíveis e contamos com profissionais com vasta experiência.'
                        }
                        idLabel={3}
                    ></Container>
                    <div className={styles.principaisConvenios}>
                        <Image src={amilLogo} />
                        <Image src={bradescoLogo} />
                        <Image src={sulamericaLogo} />
                        <Image src={saudeassimLogo} />
                    </div>
                    <div
                        className={styles.principaisConvenios}
                        style={{marginTop: '32px'}}
                    >
                        <Image src={petrobrasLogo} />
                        <Image src={caixaLogo} />
                        <Image src={cassiLogo} />
                        <Image src={goldencrossLogo} />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="col-12">
                    <div className={styles.secundariosConvenios}>
                        <Image src={allianzLogo} />
                        <Image src={amafrerjLogo} />
                        <Image src={ambepLogo} />
                        <Image src={camprjLogo} />
                        <Image src={correiosLogo} />
                    </div>
                    <div className={styles.secundariosConvenios}>
                        <Image src={eletrossaudeLogo} />
                        <Image src={embrapaLogo} />
                        <Image src={fiosaudeLogo} />
                        <Image src={gamaLogo} />
                        <Image src={notredameLogo} />
                    </div>
                    <div className={styles.secundariosConvenios}>
                        <Image src={lifeLogo} />
                        <Image src={marinhaLogo} />
                        <Image src={mediServiceLogo} />
                        <Image src={mutuaLogo} />
                        <Image src={omintLogo} />
                    </div>
                    <div className={styles.secundariosConvenios}>
                        <Image src={pameLogo} />
                        <Image src={pasa2Logo} />
                        <Image src={petrodistLogo} />
                        <Image src={postalsaudeLogo} />
                        <Image src={realgrandezaLogo} />
                    </div>
                    <div className={styles.secundariosConvenios}>
                        <Image src={sompoLogo} />
                        <Image src={tempoLogo} />
                        <Image src={saudeLogo} />
                        <Image src={unimedLogo} />
                        <Image src={valeLogo} />
                    </div>
                </div>
            </div>

            <Faq id={5} />
        </>
    )
}

export async function getServerSideProps() {
    const API_KEY=process.env.API_TOKEN
    const API_URL=process.env.BASE_URL
    const dataToSend={
        token: API_KEY
    }

    const response=await axios.get(`${API_URL}/unidade`,{
        data: dataToSend
    })
    const data=response.data

    return {
        props: {
            data
        }
    }
}
