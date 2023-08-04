import styles from '../styles/unidades.module.sass'
import {Button} from '../components/Button/Button'
import Container from '../components/Container/Container'
import {Accordion} from 'react-bootstrap'
import Image from 'next/image'
import unidadeIcon from '../public/icons/unidadesIcon.svg'
import unidadeBarra from '../public/images/UnidadeBarradaTijuca.svg'
import unidadeTijuca from '../public/images/UnidadeTijuca.svg'
import unidadeBotafogoSul from '../public/images/UnidadeBotafogoSul.svg'
import unidadeMeier from '../public/images/UnidadeMeier.svg'
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
import axios from "axios";
import {useEffect, useState} from "react";


export default function Unidades({data}) {

    const [listUnidades, setListUnidades] = useState([]);


    useEffect(() => {
        data ? setListUnidades(data) : null
        console.log(listUnidades);
    }, [])

    return (<>
        <div className={styles.unidades}>
            <div className="container-xxl">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className={styles.Hero}>
                            <h1>A Clínica Oftalmológica mais completa do Rio de Janeiro.</h1>
                            <p>
                                Agende agora sua consulta em uma de nossas unidades. Contamos com oftalmologistas na
                                Barra da Tijuca, Botafogo, Méier, Nova América – Del Castilho e Tijuca.
                            </p>
                            <div className={styles.heroButtons}>
                                <Button
                                    title={'Agendar consulta'}
                                    id={10}
                                    to={'https://web.whatsapp.com/send?phone=552124961161&text='}
                                />
                                <Button
                                    title={'Emergência Oftalmológica'}
                                    id={5}
                                    to={'/'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.breadUnidades}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <a>Página principal <b>/ Unidades</b></a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.unidadesContainer}>
            <div className='container'>
                <div className='row'>
                    {
                        listUnidades.map((un) => {
                            return <div className='col-md-4'>
                                <div className={styles.boxUnidade}>
                                    <div className={styles.boxUm}>
                                        <div className={styles.icon}>
                                            <Image src={unidadeIcon}/>
                                        </div>
                                        <div className={styles.textos}>
                                            <h4>Unidade {un.name}</h4>
                                        </div>
                                    </div>
                                    <div className={styles.boxDois}>
                                        <Image src={unidadeBarra}/>
                                        <Button
                                            title={'Conheça esta unidade'}
                                            id={1}
                                            to={'/unidades/' + un.id}
                                        />
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>

        <div className='container'>
            <div className={styles.SectionFour}>
                <Button title={'PLANOS E CONVÊNIOS'} id={1}/>
                <Container
                    title={'A Americas Oftalmocenter conta com oftalmologistas especializados para iniciar seu tratamento'}
                    star
                    content={'Nossa equipe conta com uma equipe de médicos oftalmologistas capacitados para a realização do tratamento de diversas especialidades. Além disso, utilizamos os equipamentos mais modernos disponíveis e contamos com profissionais com vasta experiência.'}
                    idLabel={3}>
                </Container>
                <div className={styles.principaisConvenios}>
                    <Image src={amilLogo}/>
                    <Image src={bradescoLogo}/>
                    <Image src={sulamericaLogo}/>
                    <Image src={saudeassimLogo}/>
                </div>
                <div className={styles.principaisConvenios} style={{marginTop: "32px"}}>
                    <Image src={petrobrasLogo}/>
                    <Image src={caixaLogo}/>
                    <Image src={cassiLogo}/>
                    <Image src={goldencrossLogo}/>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="col-12">
                <div className={styles.secundariosConvenios}>
                    <Image src={allianzLogo}/>
                    <Image src={amafrerjLogo}/>
                    <Image src={ambepLogo}/>
                    <Image src={camprjLogo}/>
                    <Image src={correiosLogo}/>
                </div>
                <div className={styles.secundariosConvenios}>
                    <Image src={eletrossaudeLogo}/>
                    <Image src={embrapaLogo}/>
                    <Image src={fiosaudeLogo}/>
                    <Image src={gamaLogo}/>
                    <Image src={notredameLogo}/>
                </div>
                <div className={styles.secundariosConvenios}>
                    <Image src={lifeLogo}/>
                    <Image src={marinhaLogo}/>
                    <Image src={mediServiceLogo}/>
                    <Image src={mutuaLogo}/>
                    <Image src={omintLogo}/>
                </div>
                <div className={styles.secundariosConvenios}>
                    <Image src={pameLogo}/>
                    <Image src={pasa2Logo}/>
                    <Image src={petrodistLogo}/>
                    <Image src={postalsaudeLogo}/>
                    <Image src={realgrandezaLogo}/>
                </div>
                <div className={styles.secundariosConvenios}>
                    <Image src={sompoLogo}/>
                    <Image src={tempoLogo}/>
                    <Image src={saudeLogo}/>
                    <Image src={unimedLogo}/>
                    <Image src={valeLogo}/>
                </div>
            </div>
        </div>

        <div className={styles.SectionTwelve}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <Button title={'FAQ'} id={11} style={{marginLeft: '32px'}}/>
                        <Container
                            idLabel={2}
                            label={"FAQ"}
                            title={"Tire suas Dúvidas"}
                            content={" Está com alguma dúvida sobre os serviços de um oftalmologista e como podemos lhe ajudar? Fique tranquilo(a) pois separamos as perguntas frequentes. Por isso, confira e tire suas dúvidas com a gente!"}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className={styles.Faq}>
                            <div className={styles.FaqItem}>
                                <div className={styles.FaqTitle}>
                                    <Accordion>
                                        <Accordion.Item eventKey="0"
                                                        className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Quando ir a um oftalmologista?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body className={styles.accordionBody}>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor
                                                    sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum
                                                    arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis
                                                    velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1"
                                                        className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Como agendar para fazer exame de vista?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor
                                                    sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum
                                                    arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis
                                                    velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2"
                                                        className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Onde ir para fazer exame de vista?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor
                                                    sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum
                                                    arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis
                                                    velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3"
                                                        className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Quando fazer o primeiro exame de vista?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor
                                                    sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum
                                                    arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis
                                                    velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4"
                                                        className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Como marcar uma consulta com o
                                                    oftalmologista?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor
                                                    sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum
                                                    arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis
                                                    velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5"
                                                        className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Qual a melhor idade para ir ao
                                                    oftalmologista?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor
                                                    sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum
                                                    arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis
                                                    velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export async function getServerSideProps() {

    const API_KEY = process.env.API_TOKEN;
    const API_URL = process.env.BASE_URL;
    const dataToSend = {
        "token": API_KEY
    };


    const response = await axios.get(`${API_URL}/unidade`
            , {
                data: dataToSend
            }
        )
    ;
    const data = response.data;

    return {
        props: {
            data
        }
    };
}