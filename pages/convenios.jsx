import {Button} from '../components/Button/Button'
import Container from '../components/Container/Container'
import SingleContainer from '../components/SingleContainer/SingleContainer'
import styles from '../styles/convenios.module.sass'
import Image from 'next/image'
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
import 'swiper/css'
import {Accordion} from 'react-bootstrap'
import Banner from '../components/Banner/Banner'
import Breadcrum from '../components/BreadCrumb/Breadcrum'
import Search from '../components/Search/Search'
import CardConvResult from '../components/Cards/CardConvResult'
import Faq from "../components/Faq/faq";
import {getConvenios} from '../services/convenios.service'
import {useState} from 'react'
import {useEffect} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,Pagination,Scrollbar,A11y} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Import Swiper styles
import 'swiper/css'
import {useWindowSize} from "@uidotdev/usehooks";

export default function Convenios() {

    const size=useWindowSize()

    const listOneBk=[
        {
            id: 1,
            name: "Amil",
        },
        {
            id: 2,
            name: "Bradesco",
        },
        {
            id: 3,
            name: "Amil",
        },
        {
            id: 2,
            name: "Bradesco",
        },
        {
            id: 3,
            name: "Amil",
        },
        {
            id: 2,
            name: "Bradesco",
        }
    ]

    const [listaMostrada,handleListaMostrada]=useState(listOneBk)

    useEffect(() => {
        const fetchMedicos=async () => {
            getConvenios()
                .then(list => {
                    handleListaMostrada(list.slice(0,3))
                })
                .catch(error => {
                    console.log('Error: '+error)
                })
        }
        fetchMedicos()
    },[])



    const filter=(val) => {
        handleListaMostrada(listaMostrada.filter((esp) => {
            if(esp.name.toLocaleLowerCase().includes(val)) {
                return esp
            }
        }
        ))
    }


    return (<>
        <Banner id={4}>
            <SingleContainer
                title={'Atendimento Oftalmológico por Planos de Saúde e Convênios'}
                description={'Oferecemos atendimentos oftalmológicos de qualidade para pacientes particulares e com convênios. Nossos médicos oftalmologistas atendem uma ampla variedade de convênios e planos de saúde no Rio de Janeiro, para garantir que nossos serviços sejam acessíveis para o maior número possível de pacientes.'}
            >
                <Button title={'Agendar consulta'} id={1} />
                <Button title={'Emergência Oftalmológica'} id={6} />
            </SingleContainer>
        </Banner>
        <Breadcrum to={'convenios'} title={' Convênios'} />
        <Search id={3} handleChange={filter}>

            <Swiper
                modules={[Navigation,Pagination,Scrollbar,A11y]}
                spaceBetween={0}
                slidesPerView={size.width>='770'? 2:1}
                Autoplay={true}
                HashNavigation={true}
                grabCursor={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
                navigation
            >
                {
                    listaMostrada.map((convenio,i) => <SwiperSlide>
                        <CardConvResult key={i} name={convenio.name} />  </SwiperSlide>)
                }


            </Swiper>

        </Search>

        <div className="container">
            <div className="row">
                <div className={styles.principaisBox}>
                    <h2>Nossos convênios</h2>
                    <div className={styles.principaisConvenios}>
                        <Image width={210} height={210} src={amilLogo} />
                        <Image width={210} height={210} src={bradescoLogo} />
                        <Image width={210} height={210} src={sulamericaLogo} />
                        <Image width={210} height={210} src={saudeassimLogo} />
                        <Image width={210} height={210} src={petrobrasLogo} />
                        <Image width={210} height={210} src={caixaLogo} />
                        <Image width={210} height={210} src={cassiLogo} />
                        <Image width={210} height={210} src={goldencrossLogo} />
                    </div>
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
                    <Image src={pasaLogo} />
                    <Image src={petrobrasLogo} />
                    <Image src={postalsaudeLogo} />
                    <Image src={realgrandezaLogo} />
                </div>

                <div className={styles.secundariosConvenios}>
                    <Image src={sompoLogo} />
                    <Image src={tempoLogo} />
                    <Image src={unafiscoLogo} />
                    <Image src={unimedLogo} />
                    <Image src={valeLogo} />
                </div>
            </div>
        </div>

        <Faq id={4} />
    </>)
}
