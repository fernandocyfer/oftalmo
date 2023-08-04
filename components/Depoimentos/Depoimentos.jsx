
import styles from "../../styles/home.module.sass";
import {Button} from "../Button/Button";
import Container from "../Container/Container";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import CardDepoimentos from "../Cards/CardDepoimentos";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css';

const Depoimentos = () => (
    <div className={styles.SectionNine}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Button title={'Depoimentos'} id={11}/>
                    <Container label={'Depoimentos'} title={'O que dizem nossos clientes'} content={' '}/>
                    <div className={styles.slideDepoiments}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={-20}
                            slidesPerView={2}
                            Autoplay={true}
                            HashNavigation={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                        >
                            <SwiperSlide>
                                <CardDepoimentos/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardDepoimentos/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardDepoimentos/>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    </div>


)
export default Depoimentos;
