import Banner from '../components/Banner/Banner'
import styles from '../styles/unidades.module.sass'
import styles2 from '../styles/home.module.sass'
import {Button} from '../components/Button/Button'
import Faq from '../components/Faq/faq'
import FormAtendimento from '../components/FormAtendimento/FormAtendimento'
import Breadcrum from "../components/BreadCrumb/Breadcrum";
import Container from "../components/Container/Container";
import SingleContainer from "../components/SingleContainer/SingleContainer";

const ogrupo=() => (<>
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
    <Breadcrum title={' O Grupo'} />

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
                <div
                    className="col-12 d-flex flex-column"
                    style={{padding: '2rem 0'}}
                >
                    <div className="col-12">
                        <div className={styles.Contact}>
                            <div className={'justify-content-center align-items-center'}>
                                <ul style={{width: '100%',margin: '0 auto',textAlign: 'left'}}>
                                    <li><h5>Mais de 500 mil pacientes atendidos.</h5></li>
                                    <li><h5>Mais de 80 médicos qualificados.</h5></li>
                                    <li><h5>Mais de 800 mil atendimentos realizados.</h5></li>
                                    <li><h5>5 unidades de atendimento.</h5></li>
                                    <li><h5> Centro cirúrgico próprio.</h5></li>
                                    <li><h5>Aceitamos mais de 35 convênios.</h5></li>
                                    <li><h5>Oferecemos 37 tipos de exames.</h5></li>
                                    <li><h5>Realizamos 18 tipos de cirurgia.</h5></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
