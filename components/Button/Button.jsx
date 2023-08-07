import Image from 'next/image'
import Link from 'next/link'
import arrowRight from '../../public/icons/arrow-right.svg'
import arrowRightWhite from '../../public/icons/arrow-right-white.svg'
import styles from '../../styles/button.module.sass'
import whatsAppButton from '../../public/icons/social/whatsapp.png'
import whatsAppButtonDois from '../../public/icons/social/whatsappDois.png'
import iconArrowError from '../../public/icons/iconArrowError404.svg'
import arrowLeftOrange from '/public/icons/arrowLeftOrange.svg'
import location from '../../public/icons/location_on.svg'

export function Button({ style, type, title, id, to, icon, dark = false }) {
  return (
    <Link href={to ? to : ''}>
      <button
        style={style}
        className={
          id == 1
            ? styles.btn_primary
            : id == 2
            ? styles.btn_secondary
            : id == 3
            ? styles.btn_thirdhary
            : id == 4
            ? styles.btn_fourthary
            : id == 5
            ? styles.btn_fivethary
            : id == 6
            ? styles.btn_six
            : id == 7
            ? styles.btn_seven
            : id == 8
            ? styles.btn_eight
            : id == 10
            ? styles.btn_ninethary
            : id == 11
            ? styles.btn_eleven
            : id == 12
            ? styles.btn_twelve
            : id == 15
            ? styles.btn_fifty
            : id == 13
            ? styles.btn_treze
            : id == 14
            ? styles.btn_quatorze
            : null
        }
        type={type}
      >
        {id == 8 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M12.25 5.83301C12.25 9.91634 7 13.4163 7 13.4163C7 13.4163 1.75 9.91634 1.75 5.83301C1.75 4.44062 2.30312 3.10526 3.28769 2.1207C4.27226 1.13613 5.60761 0.583008 7 0.583008C8.39239 0.583008 9.72774 1.13613 10.7123 2.1207C11.6969 3.10526 12.25 4.44062 12.25 5.83301Z"
              stroke="#003057"
              stroke-width="1.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 7.58301C7.9665 7.58301 8.75 6.79951 8.75 5.83301C8.75 4.86651 7.9665 4.08301 7 4.08301C6.0335 4.08301 5.25 4.86651 5.25 5.83301C5.25 6.79951 6.0335 7.58301 7 7.58301Z"
              stroke="#003057"
              stroke-width="1.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : null}
        {title}

        {id == 14 ? <Image src={arrowLeftOrange} id="arrow" /> : null}
        {id == 2 ? (
          <Image src={dark ? arrowRightWhite : arrowRight} id="arrow" />
        ) : null}
        {id == 4 ? <Image src={icon ? icon : arrowRight} id="icon" /> : null}
        {id == 10 ? <Image src={whatsAppButton} id="iconWhatsButton" /> : null}
        {id == 12 ? (
          <Image src={whatsAppButtonDois} id="iconWhatsButtonDois" />
        ) : null}
        {id == 13 ? <Image src={iconArrowError} id="iconArrowError" /> : null}
      </button>
    </Link>
  )
}
