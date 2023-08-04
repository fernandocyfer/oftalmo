
import styles from "../../styles/cardDepoimentos.module.sass";
import StarIcon from '../../public/icons/star.svg'
import photo1 from '../../public/banner/ambiente1.webp'


import Image from "next/image";


const CardDepoimentos=() => {
    return (
        <div className={styles.Testimonial}>
            <div className={styles.TestimonialContent}>
                <div className={styles.TestimonialAuthor}>
                    <div className={styles.TestimonialAuthorPhoto}>
                        <Image src={photo1} layout='intrinsic' />
                    </div>
                    <div className={styles.TestimonialAuthorInfo}>
                        <h5>Nayla Miana</h5>
                        <p>1 mês atrás</p>
                    </div>
                </div>
                <div className={styles.Label__Star}>
                    <Image src={StarIcon} />
                    &nbsp;
                    <Image src={StarIcon} />
                    &nbsp;
                    <Image src={StarIcon} />
                    &nbsp;
                    <Image src={StarIcon} />
                    &nbsp;
                    <Image src={StarIcon} />
                </div>
                <div className={styles.TestimonialText}>
                    <p>
                        São muito simpáticos e prestam ótimo atendimento desde o balcão até as consultar. 
                        Passamos no oftalmo adulto, oftalmo pediatria e na contatologa, todos muito atenciosos! A clínica é organizada e limpa (e ainda tem uma máquina de café e cappuccino de graça). 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardDepoimentos
