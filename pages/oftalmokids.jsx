import Banner from '../components/Banner/Banner'
import familiaOlhinho from '/public/banner/familiaOlhinho.webp'
import styles from '/styles/oftamokids.module.sass'
import oftamoLogo from '/public/logo/logo-oftalmokids.svg'
import olhinhos from '/public/images/olhinhos.svg'
import Image from 'next/image'
import { Button } from '../components/Button/Button'

import bookImage from '/public/images/book.svg'
import selo from '/public/icons/selo.svg'

import rodape from '/public/banner/rodape.webp'

import kids1 from '../public/banner/kids1.webp'
import kids2 from '../public/banner/kids2.webp'
import kids3 from '../public/banner/kids3.webp'
import kids4 from '../public/banner/kids4.webp'
import kids5 from '../public/banner/kids5.webp'

import fam1 from '../public/images/fam1.svg'
import fam2 from '../public/images/fam2.svg'
import fam3 from '../public/images/fam3.svg'
import fam4 from '../public/images/fam4.svg'
import fam5 from '../public/images/fam5.svg'
import fam6 from '../public/images/fam6.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Import Swiper styles
import 'swiper/css'
import CardDocKid from '../components/Cards/CardDocKid'

const Oftalmokids = () => (
  <>
    <Banner id={7}>
      <div className={styles.oftamokidsContainer}>
        <div className={'container-xl'}>
          <div className={styles.oftamoLogo}>
            <Image src={oftamoLogo} />
          </div>
          <h2>Clínica Oftalmológica Pediátrica</h2>
          <p>
            Com muito carinho, diversão e qualidade no atendimento às suas
            crianças. Americas Oftalmocenter é a casa dos melhores
            oftalmologistas infantis. Além disso, preparamos um ambiente único
            no Rio de Janeiro para atender nossos pequenos pacientes.
          </p>
          <Button id={5} title={'Agendar consulta'} />
        </div>
      </div>
    </Banner>

    <div className={styles.cardsOftalmoKids}>
      <div className={'container-md'}>
        <div className={'row d-flex justify-content-evenly'}>
          <div className={'col-3'}>
            <div className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="51"
                viewBox="0 0 57 51"
                fill="none"
              >
                <g clip-path="url(#clip0_2247_12568)">
                  <path
                    d="M9.32962 26.2321C8.74142 26.7282 8.38367 27.0332 8.02153 27.3317C7.40918 27.8365 6.75075 27.9967 6.18669 27.3317C5.6336 26.6777 5.85308 26.0324 6.45884 25.51C8.73264 23.5567 11.013 21.6077 13.2912 19.6609C17.9332 15.6928 22.5752 11.7268 27.2215 7.76299C28.4528 6.71388 28.7886 6.71827 30.0309 7.78055C36.8149 13.5748 43.5968 19.3734 50.3787 25.1699C50.6004 25.3586 50.9516 25.5364 50.9977 25.7668C51.0986 26.2804 51.2523 27.0113 50.9911 27.3054C50.7299 27.5995 49.9354 27.639 49.4767 27.4854C48.9631 27.3142 48.5614 26.8006 47.892 26.2563V27.5731C47.892 34.3748 47.892 41.1764 47.892 47.9781C47.892 49.8371 47.5935 50.1312 45.7302 50.1312C34.3195 50.1312 22.9066 50.1312 11.4959 50.1312C9.63689 50.1312 9.32962 49.8261 9.32962 47.9781C9.32962 41.2138 9.32962 34.4494 9.32962 27.6829C9.32962 27.29 9.32962 26.8993 9.32962 26.2321ZM21.3549 47.6533C21.3549 47.1572 21.3549 46.7622 21.3549 46.3671C21.3549 42.2343 21.3505 38.1037 21.3571 33.971C21.3593 32.5641 21.7038 32.2063 23.0997 32.1998C26.7562 32.1866 30.4149 32.1888 34.0715 32.1998C35.5507 32.2041 35.8756 32.5378 35.8778 34.0148C35.8844 38.1476 35.8778 42.2782 35.8778 46.411C35.8778 46.8039 35.8778 47.1945 35.8778 47.6357H45.4207C45.4405 47.3635 45.4712 47.1528 45.4712 46.9421C45.4734 39.5918 45.4865 32.2415 45.4427 24.8933C45.4405 24.4368 45.109 23.8596 44.7491 23.5479C41.018 20.315 37.2517 17.1238 33.4942 13.9238C31.8876 12.5542 30.2745 11.1913 28.6547 9.81512C28.4265 9.97753 28.2706 10.0697 28.1368 10.186C22.8737 14.6656 17.6062 19.1386 12.3738 23.6533C12.027 23.9517 11.79 24.5751 11.7878 25.0469C11.7505 32.2502 11.7614 39.4535 11.7658 46.6568C11.7658 46.9751 11.8053 47.2933 11.8295 47.6533H21.3571H21.3549ZM33.3603 47.6598V34.7018H23.8481V47.6598H33.3603Z"
                    fill="#FF7F59"
                  />
                  <path
                    d="M28.5999 2.84023C23.0954 7.5261 17.6655 12.1439 12.2356 16.7662C9.17163 19.3736 6.1099 21.9832 3.04818 24.5928C2.9099 24.7113 2.77163 24.8342 2.62678 24.9439C1.98809 25.4268 1.33844 25.519 0.791935 24.8408C0.278355 24.2021 0.489054 23.5919 1.05531 23.1047C3.02403 21.4103 5.00373 19.7335 6.98124 18.0501C13.7192 12.3107 20.4572 6.57137 27.1974 0.836386C28.5165 -0.287345 28.7184 -0.282956 30.0748 0.867113C32.2784 2.73488 34.4753 4.61362 36.6767 6.48357C36.9423 6.70964 37.2254 6.91595 37.6885 7.27809C37.6885 5.7988 37.6819 4.53241 37.6885 3.26821C37.6995 1.6726 38.0463 1.31924 39.6046 1.31485C41.1409 1.30826 42.6773 1.30168 44.2136 1.31704C45.559 1.33021 45.9541 1.73405 45.9585 3.11019C45.9672 6.58453 45.9387 10.0589 45.9892 13.5332C45.9958 13.9963 46.2657 14.5911 46.6125 14.8962C49.5557 17.4751 52.5472 19.9991 55.5212 22.5406C55.7999 22.7777 56.2103 22.9818 56.3047 23.2825C56.4583 23.7763 56.601 24.4391 56.3881 24.843C56.0589 25.4773 55.3434 25.4839 54.7705 25.0471C53.987 24.4479 53.2474 23.7917 52.4967 23.1508C44.8391 16.6323 37.1815 10.1116 29.5217 3.59304C29.2452 3.3582 28.9576 3.13652 28.5933 2.84242L28.5999 2.84023ZM43.4564 12.2273V3.81252H40.1357C40.1357 5.61224 40.1269 7.3549 40.1467 9.09976C40.1489 9.29071 40.2674 9.53652 40.4122 9.66382C41.367 10.4935 42.3437 11.2989 43.4542 12.2273H43.4564Z"
                    fill="#FF7F59"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2247_12568">
                    <rect
                      width="56"
                      height="50.1333"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h4>Nosso espaço Kids</h4>
              <p>
                Construímos um espaço moderno e original na Unidade Barra da
                Tijuca dedicado inteiramente à oftalmopediatria. São dois
                consultórios e entretenimento garantido para as crianças em um
                ambiente lúdico.
              </p>

              <Button title={'Conheça o espaço Kids '} id={14} />
            </div>
          </div>

          <div className={'col-3'}>
            <div className={styles.card}>
              <Image width="70" height="70" src={olhinhos} />
              <h4>Família Olhinho</h4>
              <p>
                Doutor Olhinho, Unicórnea e outros estão ansiosos para conhecer
                você. Uma família inteira de personagens exclusivos que ensinam
                e divertem cada criança ao longo de nossos dedicados
                atendimentos.
              </p>

              <Button title={'Conheça nossa família '} id={14} />
            </div>
          </div>

          <div className={'col-3'}>
            <div className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="56"
                viewBox="0 0 47 56"
                fill="none"
              >
                <g clip-path="url(#clip0_2247_12590)">
                  <path
                    d="M46.5 16.88C46.5 13.3 43.58 10.38 39.99 10.38C36.4 10.38 33.48 13.29 33.48 16.88C33.48 20.12 35.88 22.81 38.99 23.29V45.38C38.99 50.13 35.21 54 30.58 54L24.45 53.97C20.06 53.97 16.45 50.51 16.07 46.11C16.96 45.71 17.58 44.8 17.58 43.75V37.47C24.52 36.21 29.55 30.09 29.55 22.89V21.02C29.55 19.94 28.89 19.01 27.96 18.63V4.23C27.96 3.18 27.11 2.32 26.07 2.32H25.23V1.99C25.23 0.89 24.34 0 23.24 0H23C21.18 0 19.69 1.48 19.69 3.33C19.69 5.18 21.17 6.64 23 6.64H23.24C24.34 6.64 25.23 5.75 25.23 4.65V4.32H25.96V18.67C25.07 19.07 24.45 19.98 24.45 21.03V22.59C24.45 27.69 20.71 32.05 15.94 32.5C13.3 32.76 10.76 31.91 8.78999 30.11C6.76999 28.28 5.60999 25.65 5.60999 22.89V21.02C5.60999 19.97 4.98999 19.07 4.09999 18.66V4.32H4.82999V4.65C4.82999 5.75 5.71999 6.64 6.81999 6.64H7.05999C8.87999 6.64 10.37 5.16 10.37 3.31C10.37 1.46 8.86999 0 7.03999 0H6.79999C5.69999 0 4.80999 0.89 4.80999 1.99V2.32H3.96999C2.92999 2.32 2.07999 3.17 2.07999 4.23V18.64C1.14999 19.03 0.48999 19.95 0.48999 21.03V22.9C0.48999 30.1 5.51999 36.22 12.46 37.48V43.76C12.46 44.84 13.12 45.77 14.05 46.15C14.45 51.63 18.95 55.97 24.42 55.97L30.55 56C36.29 56 40.97 51.23 40.97 45.38V23.29C44.09 22.81 46.48 20.12 46.48 16.88H46.5ZM23 4.64C22.28 4.64 21.69 4.05 21.69 3.31C21.69 2.57 22.28 2 23 2H23.23L23.24 4.64H23ZM7.03999 2C7.75999 2 8.34999 2.59 8.34999 3.33C8.34999 4.07 7.75999 4.64 7.03999 4.64H6.80999L6.79999 2H7.03999ZM12.88 35.52C6.85999 34.46 2.49999 29.15 2.49999 22.9V21.03C2.49999 20.71 2.74999 20.44 3.04999 20.44C3.34999 20.44 3.59999 20.7 3.59999 21.03V22.9C3.59999 26.21 4.99999 29.38 7.42999 31.6C9.82999 33.78 12.91 34.8 16.12 34.5C21.91 33.94 26.44 28.71 26.44 22.6V21.04C26.44 20.72 26.69 20.45 26.99 20.45C27.29 20.45 27.54 20.71 27.54 21.04V22.91C27.54 29.16 23.17 34.47 17.15 35.53C16.23 35.69 15.57 36.48 15.57 37.41V43.77C15.57 44.09 15.32 44.36 15.02 44.36C14.72 44.36 14.47 44.1 14.47 43.77V37.41C14.47 36.48 13.8 35.69 12.89 35.53L12.88 35.52ZM39.98 21.38C37.49 21.38 35.47 19.36 35.47 16.88C35.47 14.4 37.49 12.38 39.98 12.38C42.47 12.38 44.49 14.4 44.49 16.88C44.49 19.36 42.47 21.38 39.98 21.38Z"
                    fill="#FF7F59"
                  />
                  <path
                    d="M39.99 13.3899C38.06 13.3899 36.48 14.9499 36.48 16.8799C36.48 18.8099 38.05 20.3699 39.99 20.3699C41.93 20.3699 43.5 18.8099 43.5 16.8799C43.5 14.9499 41.93 13.3899 39.99 13.3899ZM39.99 18.3599C39.16 18.3599 38.48 17.6899 38.48 16.8699C38.48 16.0499 39.16 15.3799 39.99 15.3799C40.82 15.3799 41.5 16.0499 41.5 16.8699C41.5 17.6899 40.82 18.3599 39.99 18.3599Z"
                    fill="#FF7F59"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2247_12590">
                    <rect
                      width="46"
                      height="56"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h4>Nossos profissionais</h4>

              <p>
                Para todo tipo de necessidade, temos uma equipe de
                oftalmologistas infantis especializados selecionados para
                atender cada caso do nosso querido público mais jovem. Toda
                criança merece ter sua saúde ocular em dia e bem tratada.
              </p>
              <Button
                title={'Conheça nossos oftalmologistas pediatricos '}
                id={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.sectionThree}>
      <div className={'container'}>
        <div className={'row'}>
          <div
            className={
              'col-12 d-flex justify-content-center align-items-center flex-column'
            }
          >
            <h5>Oftalmologia Pediátrica</h5>
            <h4>Americas Oftalmolokids</h4>
            <p>
              Nosso espaço é localizado no Shopping Città America, na Avenida
              das Américas, 700, Bloco 08, Barra da Tijuca. Em um ambiente
              colorido e cheio de atrações divertidas, as crianças encontram
              entretenimento e conhecimento em uma área exclusiva e segura. Há
              estacionamento no local e o acesso é fácil pelo BRT ou Metrô.
            </p>
            <Button id={5} title={'Agendar consulta'} />
          </div>
        </div>

        <div className={'row mb-5'}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={15}
            slidesPerView={5}
            Autoplay={true}
            HashNavigation={true}
            grabCursor={true}
            pagination={true}
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

    <div
      className={styles.familiaOftalmo}
      style={{ backgroundImage: `url('${familiaOlhinho.src}')` }}
    >
      <div className={'container'}>
        <div className={'row'}>
          <div
            className={
              'col-12 d-flex flex-column justify-content-center text-center align-items-center'
            }
          >
            <h5>Família Olhinho</h5>
            <h4>A visão de sua criança bem cuidada.</h4>
            <p>
              Cada oftalmologista infantil da nossa equipe é um especialista com
              experiência, empatia e comprometimento com a saúde do paciente.
              Nosso espaço conta com equipamentos de última geração que garantem
              as melhores práticas em oftalmopediatria. E as crianças ainda
              podem brincar e aprender em nosso espaço Kids, recheado de
              personagens e atividades exclusivas que tornam a visita uma
              experiência prazerosa e memorável para todos.
            </p>
          </div>
        </div>
        <div className={'row familiaOftalmo'}>
          <div className={styles.overlayOlhinhos}>
            <div className={styles.familiaOlhinhoSlide}>
              <Swiper
                id={'swiper'}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={6}
                Autoplay={true}
                HashNavigation={true}
                loop={true}
                grabCursor={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
                navigation
              >
                <SwiperSlide>
                  <div className={styles.boxOlhinho}>
                    <Image src={fam1} />
                    <p>Dr. Olhinho</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxOlhinho}>
                    <Image src={fam2} />
                    <p>Unicórnea</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxOlhinho}>
                    <Image src={fam3} />
                    <p>Vovô Catarata</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxOlhinho}>
                    <Image src={fam4} />
                    <p>Vovó Catarata</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxOlhinho}>
                    <Image src={fam5} />
                    <p>Arco-íIris</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.boxOlhinho}>
                    <Image src={fam6} />
                    <p>Pupila</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={'container-xxl'}>
      <div className={styles.containerColorir}>
        <div className={styles.image}>
          <Image src={bookImage} alt={'imagem para colorir'} />
        </div>
        <div className={styles.desc}>
          <h4>Diversão</h4>
          <h2>Material para colorir</h2>
          <p>
            Um kit de ilustrações com toda a Família Olhinho! Use à vontade
            nosso material em PDF. Ele pode ser impresso em casa para as
            crianças colorirem quando quiserem.
          </p>
          <Button id={5} title={'Baixe agora!'} />
        </div>
      </div>
    </div>

    <div className={'container-sm'}>
      <div className={styles.equipeContainer}>
        <div>
          <Image src={selo} />
          <h3>Nossa esquipe Oftalmokids</h3>
        </div>
        <div className={styles.docsList}>
          <CardDocKid />
          <CardDocKid />
          <CardDocKid />
          <CardDocKid />
          <CardDocKid />
        </div>
        <Button title={'Agendar consulta'} id={5} />
      </div>
    </div>

    <div className={styles.rodape}></div>
  </>
)

export default Oftalmokids
