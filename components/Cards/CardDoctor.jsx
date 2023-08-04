
import Image from 'next/image'
import styles from '../../styles/cardDoctor.module.sass'
import photoDefault from '../../public/images/doctor1.svg'
import Link from 'next/link'

const CardDoctor=({
    photo,nome,crm,href
}) => {
    return (
        <Link href={href? href:'/equipe/algo'}>
            <div className={styles.CardDoctor}>
                <div style={{padding: '0 0 1rem 0'}}>
                    <div className={styles.ImageDoctor}>
                        <Image src={photo? photo:photoDefault} />
                    </div>
                    <p>
                        Dr. Fulano de Tal
                    </p>
                    <span>
                        CRM: 123456
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default CardDoctor
