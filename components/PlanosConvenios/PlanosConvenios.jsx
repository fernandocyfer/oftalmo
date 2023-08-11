import styles from '../../styles/home.module.sass'
import {Button} from '../Button/Button'
import Container from '../Container/Container'
import {Swiper, SwiperSlide} from 'swiper/react'
import {A11y, Navigation, Pagination, Scrollbar} from 'swiper'
import Image from 'next/image'
import conv1 from '../../public/logo/conv1.svg'
import conv2 from '../../public/logo/conv2.svg'
import conv3 from '../../public/logo/conv3.svg'
import conv4 from '../../public/logo/conv4.svg'
import conv5 from '../../public/logo/conv5.svg'
import {useWindowSize} from "@uidotdev/usehooks";

const PlanosConvenios = () => {

    const size = useWindowSize()

    return (
        <div className={styles.SectionTen}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Button title={'Planos e convênios'} id={11}/>
                        <Container
                            label={'Planos e convênios'}
                            title={
                                'A Americas Oftalmocenter aceita os principais planos de saúde e convênios médicos.'
                            }
                            content={'Conheça a rede credenciada e agende sua consulta.'}
                        />
                        <div className={styles.Convenios}>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={-110}
                                slidesPerView={size.width >= '770' ? 5 : 2}
                                Autoplay={true}
                                HashNavigation={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={swiper => console.log(swiper)}
                                navigation={true}
                            >
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv1}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv2}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv3}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv4}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv5}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv1}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv2}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv3}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv4}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.boxLogoConv}>
                                        <Image src={conv5}/>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div>
                        <Button title={'Consulte nossos convênios'} id={1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanosConvenios
