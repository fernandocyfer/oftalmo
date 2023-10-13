import React, { useState, useEffect } from 'react';
import 'swiper/swiper-bundle.min.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

import styles from '../../styles/home.module.sass';

import kids1 from '../../public/banner/kids01.webp';
import kids2 from '../../public/banner/kids02.webp';
import kids3 from '../../public/banner/kids03.webp';
import kids4 from '../../public/banner/kids04.webp';
import kids5 from '../../public/banner/kids05.webp';
import kids6 from '../../public/banner/kids06.webp';
import kids7 from '../../public/banner/kids07.webp';
import kids8 from '../../public/banner/kids08.webp';
import kids9 from '../../public/banner/kids09.webp';

const YourComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [size, setSize] = useState({ width: undefined });


  const images = [
   kids1, kids2, kids3, kids4, kids5, kids6, kids7, kids8, kids9
];

   const imageUrls = [
      'https://i.ibb.co/4TfJZwG/Box-01.jpg',
      'https://i.ibb.co/WHTRwqd/Box-02.jpg',
      'https://i.ibb.co/6gZmpX0/Box-03.jpg',
      'https://i.ibb.co/3fqbqfq/Box-04.jpg',
      'https://i.ibb.co/q7ThT22/Box-05.jpg',
      'https://i.ibb.co/V3yYGxt/Box-06.jpg',
      'https://i.ibb.co/p1txS5M/Box-07.jpg',
      'https://i.ibb.co/Y20DMtB/Box-08.jpg',
      'https://i.ibb.co/H2gnqb4/Box-09.jpg',
   ];

  const openLightbox = (index) => {
    setImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Verifica se o código está sendo executado no navegador antes de acessar window.
      setSize({ width: window.innerWidth });

      const handleResize = () => {
        setSize({ width: window.innerWidth });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div style={{background: 'rgba(207, 207, 207, 0.15)'}}>
      <div className={styles.slideKids}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={size.width >= 770 ? 5 : 1}
          Autoplay={true}
          HashNavigation={true}
          grabCursor={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => openLightbox(index)}
                style={{ cursor: 'pointer' }}
              >
                <Image src={image} width={206} height={136} alt={`Image ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {lightboxOpen && (
        <Lightbox
        mainSrc={imageUrls[imageIndex]}
        nextSrc={imageUrls[(imageIndex + 1) % imageUrls.length]}
        prevSrc={imageUrls[(imageIndex + imageUrls.length - 1) % imageUrls.length]}
        onCloseRequest={closeLightbox}
        onMovePrevRequest={() =>
          setImageIndex((imageIndex + imageUrls.length - 1) % imageUrls.length)
        }
        onMoveNextRequest={() =>
          setImageIndex((imageIndex + 1) % imageUrls.length)
        }
      />
      )}
    </div>
  );
};

export default YourComponent;
