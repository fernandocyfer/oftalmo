import {Button} from "../components/Button/Button";
import Container from "../components/Container/Container";
import SingleContainer from "../components/SingleContainer/SingleContainer";
import styles from "../styles/convenios.module.sass";
import Image from "next/image";
import amilLogo from '../public/logo/convenios/amil-logo.svg'
import itauLogo from '../public/logo/convenios/itau-logo.svg'
import bradescoLogo from '../public/logo/convenios/bradesco-logo.svg'
import portoseguroLogo from '../public/logo/convenios/portoseguro-logo.svg'
import pasaLogo from '../public/logo/convenios/pasa-logo.svg'

import allianzLogo from '../public/logo/convenios/allianz-logo.svg'
import unimedLogo from '../public/logo/convenios/unimed-logo.svg'
import valeLogo from '../public/logo/convenios/vale-logo.svg'
import embrapaLogo from '../public/logo/convenios/embrapa-logo.svg'
import mediServiceLogo from '../public/logo/convenios/mediservice-logo.svg'
import correiosLogo from '../public/logo/convenios/correios-logo.svg'
import petrobrasLogo from '../public/logo/convenios/petrobras-logo.svg'
import fiosaudeLogo from '../public/logo/convenios/fiosaude-logo.svg'
import marinhaLogo from '../public/logo/convenios/marinha-logo.svg'
import amafrerjLogo from '../public/logo/convenios/amafrerj-logo.svg'
import ambepLogo from '../public/logo/convenios/ambep-logo.svg'
import saudeassimLogo from '../public/logo/convenios/saudeassim-logo.svg'
import caixaLogo from '../public/logo/convenios/caixa-logo.svg'
import camprjLogo from '../public/logo/convenios/camprj-logo.svg'
import cassiLogo from '../public/logo/convenios/cassi-logo.svg'
import eletrossaudeLogo from '../public/logo/convenios/eletrossaude-logo.svg'
import gamaLogo from '../public/logo/convenios/gama-logo.svg'
import goldencrossLogo from '../public/logo/convenios/goldencross-logo.svg'
import lifeLogo from '../public/logo/convenios/life-logo.svg'
import mutuaLogo from '../public/logo/convenios/mutua-logo.svg'
import notredameLogo from '../public/logo/convenios/notredame-logo.svg'
import omintLogo from '../public/logo/convenios/omint-logo.svg'
import pameLogo from '../public/logo/convenios/pame-logo.svg'
import unafiscoLogo from '../public/logo/convenios/unafisco-logo.svg'
import pasa2Logo from '../public/logo/convenios/pasa2-logo.svg'
import saudeLogo from '../public/logo/convenios/saude-logo.svg'
import petrodistLogo from '../public/logo/convenios/petrodist-logo.svg'
import postalsaudeLogo from '../public/logo/convenios/postalsaude-logo.svg'
import realgrandezaLogo from '../public/logo/convenios/realgrandeza-logo.svg'
import sompoLogo from '../public/logo/convenios/sompo-logo.svg'
import sulamericaLogo from '../public/logo/convenios/sulamerica-logo.svg'
import tempoLogo from '../public/logo/convenios/tempo-logo.svg'


// Import Swiper styles
import 'swiper/css';
import {Accordion} from 'react-bootstrap'
import Banner from "../components/Banner/Banner";
import Breadcrum from "../components/BreadCrumb/Breadcrum";
import Search from "../components/Search/Search";
import CardConvResult from "../components/Cards/CardConvResult";


export default function Convenios() {
    return (<>
        <Banner id={4}>
            <SingleContainer title={'Atendimento Oftalmológico por Planos de Saúde e Convênios'}
                             description={'Oferecemos atendimentos oftalmológicos de qualidade para pacientes particulares e com convênios. Nossos médicos oftalmologistas atendem uma ampla variedade de convênios e planos de saúde no Rio de Janeiro, para garantir que nossos serviços sejam acessíveis para o maior número possível de pacientes.'}
            >
                <Button title={'Agendar consulta'} id={1}/>
                <Button title={'Emergência Oftalmológica'} id={6}/>
            </SingleContainer>
        </Banner>

        <Breadcrum title={' Convênios'}/>


        <Search id={1}>
            <CardConvResult/>
            <CardConvResult/>
        </Search>


        <div className="container">
            <div className="row">
                <div className={styles.principaisBox}>
                    <h2>Nossos convênios</h2>
                    <div className={styles.principaisConvenios}>
                        <Image width={210} height={210} src={amilLogo}/>
                        <Image width={210} height={210} src={bradescoLogo}/>
                        <Image width={210} height={210} src={sulamericaLogo}/>
                        <Image width={210} height={210} src={saudeassimLogo}/>
                        <Image width={210} height={210} src={petrobrasLogo}/>
                        <Image width={210} height={210} src={caixaLogo}/>
                        <Image width={210} height={210} src={cassiLogo}/>
                        <Image width={210} height={210} src={goldencrossLogo}/>
                    </div>
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
                    <Image src={pasaLogo}/>
                    <Image src={petrobrasLogo}/>
                    <Image src={postalsaudeLogo}/>
                    <Image src={realgrandezaLogo}/>
                </div>

                <div className={styles.secundariosConvenios}>
                    <Image src={sompoLogo}/>
                    <Image src={tempoLogo}/>
                    <Image src={unafiscoLogo}/>
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
                                        <Accordion.Item eventKey="0" className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Qual é o melhor plano de saúde do Rio de Janeiro? </h6>
                                            </Accordion.Header>
                                            <Accordion.Body className={styles.accordionBody}>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Quais são os oftalmologistas que atendem pela Unimed?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Quais são as clínicas conveniadas com a Unimed?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Qual oftalmologista que atende Amil?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4" className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Como marcar consulta no plano assim?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5" className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Quais as clínicas que aceitam Bradesco saúde?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Como marcar consulta no convênio Porto Seguro?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>O que cobre o plano essencial da Allianz? </h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis velit.
                                                    Pellentesque quam dictum ut id nascetur.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className={styles.accordionItem}>
                                            <Accordion.Header className={styles.accordionHeader}>
                                                <h6>Qual a rede credenciada Fiosaúde?</h6>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                                                    cursus enim metus. Amet sed ultrices leo dictum arcu in
                                                    lacus at. Faucibus pulvinar lorem amet mauris.
                                                    <br/>
                                                    <br/>
                                                    Venenatis malesuada at nec velit vitae duis velit.
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
