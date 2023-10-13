import CustomHead from '../components/CustomHead/CustomHead'
import Banner from '../components/Banner/Banner'
import styles from '../styles/home.module.sass'
import {Button} from '../components/Button/Button'

import estetoIcon from '../public/icons/esteto-icon.svg'
import eyeStatisticIcon from '../public/icons/eye-statistic.svg'
import estetoFormIcon from '../public/icons/estetoFormIcon.svg'

import containerBackgroundDois from '../public/images/videosct2.png'

import Merda from '../components/Blog/Posts'
import VideoSlide from '../components/VideoSlider/slider'


import containerBackgroundDoisMobile from '../public/mobile/videomobilebg.svg'

import diferencial1 from '../public/icons/diferencial-1.svg'
import diferencial2 from '../public/icons/diferencial-2.svg'
import diferencial3 from '../public/icons/diferencial-3.svg'
import diferencial4 from '../public/icons/diferencial-4.svg'

import cardEspecialidades1 from '../public/images/especialidades-1.svg'
import cardEspecialidades2 from '../public/images/especialidades-2.svg'
import cardEspecialidades3 from '../public/images/especialidades-3.svg'
import cardEspecialidades4 from '../public/images/especialidades-4.svg'
import cardEspecialidades5 from '../public/images/especialidades-5.svg'
import cardEspecialidades6 from '../public/images/especialidades-6.svg'
import cardEspecialidades7 from '../public/images/especialidades-7.svg'
import cardEspecialidades8 from '../public/images/especialidades-8.svg'

import locationIcon from '../public/images/location2.png'
import oftalmoPic from '../public/images/oftalmokids.svg'

import kids1 from '../public/banner/kids1.webp'
import kids2 from '../public/banner/kids2.webp'
import kids3 from '../public/banner/kids3.webp'
import kids4 from '../public/banner/kids4.webp'
import kids5 from '../public/banner/kids5.webp'


import Image from 'next/image'

import Statistic from '../components/Statistic/Statistic'

import CardDiferencialFirst from '../components/Cards/CardDiferencialFirst'
import CardEspecialidades from '../components/Cards/CardEspecialidades'
import Container from '../components/Container/Container'


import oftalmoKids from '../public/logo/logo-oftalmokids.png'

import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,Pagination,Scrollbar,A11y} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


// Import Swiper styles
import 'swiper/css'

import Faq from '../components/Faq/faq'
import Depoimentos from '../components/Depoimentos/Depoimentos'
import PlanosConvenios from '../components/PlanosConvenios/PlanosConvenios'
import FormAtendimento from '../components/FormAtendimento/FormAtendimento'
import MedicoSingle from '../components/Medicos/MedicoSingle'
import {useEffect,useState} from 'react'
import {getMedicos} from '../services/app.service'
import Modal from "../components/Modal/Modal";
import {useWindowSize} from "@uidotdev/usehooks";

export default function Home({}) {
    const [listaMostrada,handleListaMostrada]=useState([])

    useEffect(() => {
        const fetchMedicos=async () => {
            getMedicos()
                .then(list => {
                    handleListaMostrada(list.slice(0,3))
                })
                .catch(error => {
                    console.log('Error: '+error)
                })
        }
        fetchMedicos()
    },[])


    const size=useWindowSize()


    return (<>
        <CustomHead title={'Americas Oftalmocenter'} />

        <Banner id={1}>
            <div className="container-fluid">
                <div>
                    <div className="col-md-6">
                        <div className={styles.Hero}>
                            <h1>
                                A Clínica Oftalmológica mais completa do Rio de Janeiro.
                            </h1>
                            <p>Agende agora sua consulta com um oftalmologista</p>
                            <div className="d-flex">
                                <Button
                                    title={'Agendar consulta'}
                                    id={10}
                                    target="_blank"
                                    to={'https://wa.me/5512212491116?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta.'}
                                />
                                <Button
                                    title={'Emergências 24h'}
                                    id={15}
                                    to={'/emergencia'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Banner>

        <div className={styles.SectionTwoMobile}>
            <div className={styles.SectionTwo_boxTwo}>
                <Button title={'Nossas Clínicas'} id={11} />
                <h2>
                    A American Oftalmocenter conta com 5 unidades no Rio de Janeiro.
                </h2>
                <p>
                    Escolha uma de nossas clínicas oftalmológicas. Veja a mais próxima
                    de você!
                </p>
                <p className={styles.titleNossasClinicas}>Nossas clínicas: </p>
                <div className="form-group">
                    <select
                        className="form-control-lg"
                        name="unidades"
                        onChange={() => window.location.href='/unidades'}
                    >
                        <option selected disabled>Escolha sua clínica aqui</option>

                        <option><Button to={'/unidades/9d14fe9c-e8d4-42c2-9895-a76b85993f5f'} title="Unidade Barra "></Button></option>
                        <option><Button to={'/unidades'} title=" Unidade Barra Kids "></Button></option>
                        <option><Button to={'/unidades/fcbbaa9c-9c3a-454f-8f96-d26ad85f8d4c'} title="Unidade Botafogo "></Button></option>
                        <option><Button to={'/unidades'} title="Unidade CC Tijuca (IOT)"></Button></option>
                        <option><Button to={'/unidades/458b2bcc-7066-4d11-8dd2-66e332faebca'} title="Unidade Méier "></Button></option>
                        <option><Button to={'/unidades/88d4fe11-287c-48ff-a231-eaf27fe4fe02'} title="Unidade Nova América "></Button></option>
                        <option><Button to={'/unidades/48462d41-8031-4b6c-a13e-963bc9fde471'} title="Unidade Tijuca "></Button></option>
                    </select>
                </div>
            </div>

            <div className="container p-4">
                <Image
                    src={containerBackgroundDoisMobile}
                    alt={'Criança realizando exame kkkkk'}
                    title={'Criança realizando exame kkkkkkkkk'}
                    layout={'responsive'}
                />
            </div>

            
            <div className="container d-flex justify-content-center pb-5 mb-5 mt-5">
                <Button title={'Agendar consultar e exames'} id={10} to={''} />
            </div>
        </div>

        <div className={styles.SectionTwo}>
            <div className={styles.SectionTwo_container}>
                <div className="container d-flex align-items-center justify-content-center" id="containerDoisSobreposto">
                    <div className="col-4">
                        <VideoSlide />
                    </div>
                    <div className="col-8">
                        <div className={styles.SectionTwo_boxTwo}>
                            <Button title={'Nossas Clínicas'} id={11} />
                            <h2>
                                A American Oftalmocenter conta com 5 unidades <br />no Rio de
                                Janeiro.
                            </h2>
                            <p>
                                Escolha uma de nossas clínicas oftalmológicas. Veja a mais
                                próxima de você!
                            </p>
                            <div className={styles.maisDoidoAinda}>
                                <div>
                                    <Button
                                        title={'Unidade Barra da Tijuca'}
                                        to={'/unidades/9d14fe9c-e8d4-42c2-9895-a76b85993f5f'}
                                        id={4}
                                        icon={locationIcon}
                                    />
                                </div>
                                <div>
                                    <Button
                                        title={'Unidade Del Castilho Zona Norte'}
                                        to={'/unidades'}
                                        id={4}
                                        icon={locationIcon}
                                    />
                                </div>
                                <div>
                                    <Button
                                        title={' Unidade Bota fogo Zona Sul'}
                                        to={'/unidades/fcbbaa9c-9c3a-454f-8f96-d26ad85f8d4c'}
                                        id={4}
                                        icon={locationIcon}
                                    />
                                </div>
                                <div>
                                    <Button
                                        title={'Unidade Méier'}
                                        to={'/unidades/458b2bcc-7066-4d11-8dd2-66e332faebca'}
                                        id={4}
                                        icon={locationIcon}
                                    />
                                </div>
                                <div>
                                    <Button
                                        title={'Unidade Tijuca'}
                                        to={'/unidades/48462d41-8031-4b6c-a13e-963bc9fde471'}
                                        id={4}
                                        icon={locationIcon}
                                    />
                                </div>
                            </div>
                            <div className={styles.unidadesBtnDois}>
                                <Button 
                                title={'Agendar consultas e exames'} 
                                id={12}
                                target="_blank"
                                to={'https://wa.me/5512212491116?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta.'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.mtoDoido}>
            <div className="d-flex justify-content-arround gap-5">
                <Statistic
                    image={estetoIcon}
                    title={'+65'}
                    subtitle={'médicos oftalmologistas especializados'}
                />
                <Statistic
                    image={eyeStatisticIcon}
                    title={'+500k'}
                    subtitle={' Pacientes  atendidos   '}
                />
                <Statistic
                    image={estetoFormIcon}
                    title={'+800k'}
                    subtitle={'Atendimentos realizados'}
                />
            </div>
        </div>
        <div className="container containerStatisticBoxMobile">
            <div className="justify-content-center">

                <div className={styles.SelectBox}>
                    <CardDiferencialFirst
                        title={'Profissionais altamente qualificados'}
                        description={'Garantimos que todos os nossos oftalmologistas são altamente qualificados para lhe atender'}
                        image={diferencial1}
                    />
                    <CardDiferencialFirst
                        title={'Equipamentos de última geração'}
                        description={'Nossas unidades possuem equipamentos modernos para prover os melhores resultados.'}
                        image={diferencial2}
                    />
                    <CardDiferencialFirst
                        title={'Centro cirúrgico próprio'}
                        description={'Contamos com centro cirúrgico próprio com os equipamentos mais modernos para realizar cirurgias oculares.'}
                        image={diferencial3}
                    />
                    <CardDiferencialFirst
                        title={'Ambiente moderno, confortável e humanizado'}
                        description={'Nossas unidades contam com estrutura moderna e confortável'}
                        image={diferencial4}
                    />
                </div>
            </div>

        </div>
        <div className={styles.SectionFour}>
            <Button title={'Nossas especialidades'} id={11} />
            <Container
                title={'A Americas Oftalmocenter conta com oftalmologistas especializados para iniciar seu tratamento'}
                star
                content={'Nossa equipe conta com uma equipe de médicos oftalmologistas capacitados para a realização do tratamento de todas essas especialidades. Além disso, utilizamos os equipamentos mais modernos disponíveis e contamos com profissionais com vasta experiência.'}
                idLabel={3}
            >
                <div className={styles.mtodoido}>
                    <CardEspecialidades
                        title={'Cirurgia de Catarata'}
                        href={'/servicos/especialidades/catarata'}
                        image={cardEspecialidades1}
                    />
                    <CardEspecialidades
                        title={'Crosslinking'}
                        href={'/servicos/especialidades/crosslinking'}
                        image={cardEspecialidades2}
                    />
                    <CardEspecialidades
                        title={'Vitrectomia'}
                        href={'/servicos/especialidades/vitrectomia'}
                        image={cardEspecialidades3}
                    />
                    <CardEspecialidades
                        title={'Cirurgia de refrativa'}
                        href={'/servicos/especialidades/cirurgia_de_refrativa'}
                        image={cardEspecialidades4}
                    />
                    <CardEspecialidades
                        title={'Buraco macular'}
                        href={'/servicos/especialidades/Buraco macular'}
                        image={cardEspecialidades5}
                    />
                    <CardEspecialidades
                        title={'Blefaropastia'}
                        href={'/servicos/especialidades/Blefaropastia'}
                        image={cardEspecialidades6}
                    />
                    <CardEspecialidades
                        title={'Cirurgia Antiglaucomatosa'}
                        href={'/servicos/especialidades/cirurgia_antiglaucomatosa'}
                        image={cardEspecialidades7}
                    />
                    <CardEspecialidades
                        title={'Lentes de contato'}
                        href={'/servicos/especialidades/lentes_de_contato'}
                        image={cardEspecialidades8}
                    />
                </div>
                <div className={styles.especialidadesMobile}>
                    <select class="form-select">
                        <option selected>Escolha sua especialidade aqui</option>
                        <option value="1">Cirurgia de Catarata</option>
                        <option value="2">Crosslinking</option>
                        <option value="3">Vitrectomia</option>
                        <option value="4">Cirurgia de refrativa</option>
                        <option value="5">Buraco macular</option>
                        <option value="6">Blefaropastia</option>
                        <option value="7">Cirurgia Antiglaucomatosa</option>
                        <option value="8">Lentes de contato</option>
                    </select>
                </div>
                <div className={styles.SectionFourActionButton}>
                    <p>Entre em contato com a gente para agendar sua consulta.</p>
                    <Button to={'https://wa.me/5512212491116?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta.'} title={'Agendar consultas e exames'} id={1} target="_blank" />
                </div>
            </Container>
        </div>

        <div className={styles.SectionFive}>
            <Button title={'Nossos Médicos'} id={11} />
            <Container
                label={'Nossos médicos'}
                content={'Nosso corpo clínico é composto por mais de 65 médicos oftalmologistas prontos para lhe atender em todas as áreas clínicas e cirúrgicas da oftalmologia. São profissionais comprometidos em prestar aos nossos pacientes o mais alto nível de qualidade e segurança.'}
                title={'Aqui você encontra os melhores oftalmologistas do Rio de Janeiro'}
                idLabel={1}
            ></Container>

            <div className={'container d-flex justify-content-around mt-5 mb-5 flex-wrap'}>
                {listaMostrada.map((medico,i) => {
                    return <MedicoSingle medico={medico} key={i} />
                })}
            </div>
            <Button to={'/equipe'} title={'Conheça nossos oftalmologistas'} id={1} />
        </div>

        <div className={styles.SectionSeven}>
            <div
                className="container"
                style={{background: 'rgba(207, 207, 207, 0.15)'}}
            >
                <div className={'d-lg-flex d-md-flex flex-lg-row flex-sm-column'}>

                    <div className="col-lg-5 col-md-5 col-sm-12 p-0">
                        <Image src={oftalmoPic} />
                    </div>
                    <div className="col-lg-7 col-md-7  d-flex flex-column">
                        <div className={styles.oftalmoKids}>
                            <Image src={oftalmoKids} />
                        </div>
                        <Button title={'Oftalmolofia infantil'} id={11} />
                        <Container
                            label={'Oftalmologia Infantil'}
                            title={'Todas as nossas unidades contam com médicos oftalmologistas pediátricos para atender nossos pequenos pacientes.'}
                            content={'Preparamos uma unidade temática na Barra da Tijuca para receber os seus filhos com muito carinho.Personagens temáticos, parquinho e ambiente infantil fazem da consulta das crianças uma experiência lúdica.'}
                        ></Container>
                        <p
                            style={{
                                textAlign: 'left',padding: '0.5rem 1rem',marginTop: '-1rem'
                            }}
                        >
                            Acesse o site da <b>Americas OftalmoKids</b> para saber mais.
                        </p>
                        <Button
                            style={{maxWidth: '200px'}}
                            title={'Visitar Oftalmokids'}
                            id={1}
                            to={'/oftalmokids'}
                        />
                    </div>

                </div>
            </div>

            <div
                className="container"
                style={{background: 'rgba(207, 207, 207, 0.15)'}}
            >
                <div>
                    <div className={styles.slideKids}>
                        <Swiper
                            modules={[Navigation,Pagination,Scrollbar,A11y]}
                            spaceBetween={15}
                            slidesPerView={size.width>='770'? 5:1}
                            Autoplay={true}
                            HashNavigation={true}
                            grabCursor={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={swiper => console.log(swiper)}
                            navigation
                        >
                            <SwiperSlide>
                                <Image src={kids1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids5} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image src={kids1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids5} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image src={kids1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={kids5} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

        <Depoimentos />

        <PlanosConvenios />

        <div className={styles.SectionEleven}>
            <div className="container">
                <div>
                    <div className="col-md-12">
                        <Button title={'Aprenda mais'} id={11} />
                        <Container
                            label={'Aprenda mais'}
                            title={'Nossos artigos publicados'}
                            content={' '}
                        />
                        <div className={styles.postsBlog}>
                            <Merda />
                        </div>
                        <Button title={'Todos nossos artigos'} id={1} />
                    </div>
                </div>
            </div>
        </div>

        <Faq id={1} />

        <FormAtendimento />
        {/* // <Modal body={<iframe width="100%" height="300" src="https://www.youtube.com/embed/S4plMxPsShA"
        //     title="Ceratocone - Dra. Evelyn Ciuffo" frameBorder="0"
        //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //     allowFullScreen></iframe>} /> */}

    </>)
}
