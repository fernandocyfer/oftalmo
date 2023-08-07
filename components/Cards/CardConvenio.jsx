import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/cardConvenio.module.sass'
import conv1 from '/public/logo/conv1.svg'

const CardConvenio = ({ src = conv1 }) => {
  return (
    <>
      <Link href="/convenios">
        <div className={styles.CardConvenio}>
          <div className={styles.boxLogoConv}>
            <Image src={src} />
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardConvenio
