import Banner from '../components/Banner/Banner'
import styles from '../styles/unidades.module.sass'
import styles2 from '../styles/home.module.sass'
import {Button} from '../components/Button/Button'
import Faq from '../components/Faq/faq'
import FormAtendimento from '../components/FormAtendimento/FormAtendimento'
import Breadcrum from "../components/BreadCrumb/Breadcrum";
import Container from "../components/Container/Container";
import SingleContainer from "../components/SingleContainer/SingleContainer";
import Head from 'next/head'
import Statistic from '../components/Statistic/Statistic'

import estetoIcon from '../public/icons/esteto-icon.svg'
import eyeStatisticIcon from '../public/icons/eye-statistic.svg'
import estetoFormIcon from '../public/icons/estetoFormIcon.svg'
import unidades from '../public/icons/hospital.png'
import cc from '../public/icons/surgery-room.png'
import conv from '../public/icons/health-insurance.png'
import exams from '../public/icons/exams.png'
import surgery from '../public/icons/eye.png'

const ogrupo=() => (<>

    <Head>
        <title>O Grupo Americas Oftalmocenter</title>
        <meta name="title" content="O Grupo Americas Oftalmocenter" />
        <meta name="description" content=" O Grupo Americas Oftalmocenter conta com 5 clínicas oftalmológicas no Rio de Janeiro. Nossa estrutura foi pensada para atender pacientes com praticidade e excelência no atendimento. Nosso corpo clínico altamente especializado conta com mais de 80 oftalmologistas, preparados para prestar atendimento de excelência em todas as áreas da oftalmologia." />
        <link rel="canonical" href='' />
        <meta name='robots' content='index, follow' />
    </Head>

    <Banner id={11}>
        <SingleContainer
            title={'O Grupo'}
            description={'O Grupo Americas Oftalmocenter conta com 5 clínicas oftalmológicas no Rio de Janeiro. Nossa estrutura foi pensada para atender pacientes com praticidade e excelência no atendimento. Nosso corpo clínico altamente especializado conta com mais de 80 oftalmologistas, preparados para prestar atendimento de excelência em todas as áreas da oftalmologia.'}
        >
            <div className={'d-flex justify-content-center pt-3'}>
                <Button title={'Agendar consulta'} id={10}
                    to={'https://web.whatsapp.com/send?phone=552124961161&text='} />
                <Button title={'Emergência Oftalmológica'} id={6} to={'/'} />
            </div>
        </SingleContainer>

    </Banner>
    <Breadcrum to={'ogrupo'} title={' O Grupo'} />

    <div className={'p-5'}
        style={{background: 'radial-gradient(76.26% 198.87% at 50% 50.06%, #1085E5 0%, #0C52DB 100%)'}}>
        <div className={styles2.SectionThirteen}>

            <div className="col-12">
                <Container
                    idLabel={2}
                    label={'FALE AGORA CONOSCO'}
                    title={'Números que nos orgulham'}
                    content={' '}
                    dark={true}
                />
                <br />
                <br />
                <div className="col-12 ">
                    <div className="d-flex justify-content-center flex-wrap">

                        <Statistic
                            image={estetoFormIcon}
                            title={'+500 mil'}
                            subtitle={'pacientes atendidos.'}
                        />
                        <Statistic
                            image={estetoIcon}
                            title={'+80'}
                            subtitle={'médicos qualificados.'}
                        />
                        <Statistic
                            title={'+800 mil'}
                            image={eyeStatisticIcon}
                            subtitle={'Atendimentos realizados.'}
                        />
                        <Statistic
                            title={'5'}
                            image={unidades}
                            subtitle={'Unidades de atendimento.'}
                        />
                    </div>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center flex-wrap">
                        <Statistic
                            image={cc}
                            title={' '}
                            subtitle={'Centro cirúrgico próprio.'}
                        />
                        <Statistic
                            image={conv}
                            title={'+35'}
                            subtitle={'Aceitamos mais de 35 convênios.'}
                        />
                        <Statistic
                            title={'+37'}
                            image={exams}
                            subtitle={'Tipos de exames.'}
                        />
                        <Statistic
                            title={'+18'}
                            image={surgery}
                            subtitle={'Tipos de cirurgias.'}
                        />
                    </div>

                    <ul style={{width: '100%',margin: '0 auto',textAlign: 'left'}}>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className={'p-5'}>
        <Container
            idLabel={2}
            label={'NOSSO PROPÓSITO'}
            title={'NOSSO PROPÓSITO'}
            content={'A motivação do Grupo Americas Oftalmocenter é entregar saúde ocular aos nossos pacientes, aliada à melhor experiência possível. Estamos preparados para cuidar da visão das pessoas em todas as etapas da vida e somos muito orgulhosos de nossa trajetória. Visão: Sermos reconhecidos, dentro e fora do meio oftalmológico, como referência em atendimento e diagnóstico de pacientes. Através de uma seleção criteriosa de profissionais que auxiliam os médicos especialistas no exercício da medicina, além de usar tudo o que a tecnologia de ponta e a modernidade podem oferecer para atingirmos este objetivo. Missão: Exceder as expectativas dos nossos pacientes, oferecendo excelência no atendimento médico, aliada à melhor gestão de pessoas, promovendo não só o bem-estar para o paciente do ponto de vista de diagnósticos e tratamentos, mas também envolvendo toda a experiência positiva que vai do atendimento telefônico até a capacitação do médico. Valores: Atender, tratar e confortar os pacientes com todo o cuidado que a medicina exige. Cumprir todas as questões éticas seguindo nossas filosofias e métodos rumo à excelência médica.'}
        />
    </div>

    <div className={'p-5'}
        style={{background: 'radial-gradient(76.26% 198.87% at 50% 50.06%, #1085E5 0%, #0C52DB 100%)'}}>
        <div className={styles2.SectionThirteen}>

            <div className="col-12 text-center">
                <Container
                    idLabel={2}
                    label={'FALE AGORA CONOSCO'}
                    title={'NOSSAS ESPECIALIDADES'}
                    content={'Cirurgia de Catarata: Somos especialistas em cirurgia de catarata. Contamos com uma equipe de médicos oftalmologistas especializados na realização dessas cirurgias, utilizamos os equipamentos mais modernos disponíveis e dispomos de vasta experiência. Nossa equipe de cirurgiões já realizou mais de 100.000 cirurgias de catarata. Lentes de Contato: Possuímos uma equipe de especialistas em lentes de contato. Trabalhamos com as melhores marcas do mercado para garantir a melhor adaptação e conforto aos nossos pacientes. Oftalmologia Pediátrica: Todas as nossas unidades contam com médicos oftalmologistas pediátricos para atender nossos pequenos pacientes. Preparamos uma unidade temática na Barra da Tijuca para receber seus filhos com muito carinho. Personagens temáticos, parquinho e ambiente infantil fazem da consulta das crianças uma experiência lúdica. '}
                    dark={true}
                />
            </div>

        </div>
    </div>

    <div className={'p-5 text-end'}>
        <Container
            idLabel={2}
            label={'NOSSA DIFERENCIAÇÃO'}
            title={'NOSSA DIFERENCIAÇÃO'}
            content={'Central de Atendimento 24 horas: Nossa central de atendimento funciona 24 horas por telefone ou WhatsApp, garantindo suporte e agilidade para nossos pacientes. Ambiente Moderno e Confortável: Nossas unidades contam com estrutura moderna e confortável, proporcionando um ambiente acolhedor e agradável para nossos pacientes. Centro Cirúrgico Próprio: Contamos com centro cirúrgico próprio equipado com os mais modernos equipamentos para realizar cirurgias oculares, garantindo segurança e qualidade nos procedimentos. Profissionais Altamente Qualificados: Garantimos que todos os nossos oftalmologistas são altamente qualificados, com experiência e conhecimento para fornecer o melhor atendimento possível. Equipamentos de Última Geração: Nossas unidades possuem equipamentos de última geração para prover os melhores resultados nos exames e tratamentos oferecidos.'}
        />
    </div>

    {/* <Faq id={4}/> */}
    <FormAtendimento hasContact={false} />
</>
)

export default ogrupo
