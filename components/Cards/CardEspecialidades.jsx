import styles from '../../styles/cards.module.sass'
import Image from 'next/image'
import defaultImage from '../../public/images/card-1.svg'
import arrowIcon from '../../public/icons/arrow-right.svg'
import Link from 'next/link'

export default function CardEspecialidades({ title, image, href }) {
  return (
    <div className={styles.CardEspecialidades}>
      <div className={styles.CardEspecialidades__image}>
        <Image src={image || defaultImage} alt={title} />
      </div>
      <Link href={href ? href : ''}>
        <div className={styles.CardEspecialidades__content}>
          <h5>
            {title ? title : 'Título'}
            <Image src={arrowIcon} />
          </h5>
        </div>
      </Link>
    </div>
  )
}
