
import styles from '../../styles/cards.module.sass'
import Image from 'next/image'
import defaultImage from '../../public/images/card-1.svg'


const CardDiferencialFirst=({title,description,image}) => {
    return (
        <div className={styles.CardDiferencialFirst}>
            <div className="row">
                <div className="d-flex flex-column">
                    <div className={styles.CardDiferencial__ImageFirst}>
                        <Image src={image? image:defaultImage} alt="Eye statistic icon" />
                    </div>
                    <h5>{title? title:'Título do card'}</h5>
                    <p>
                        {description? description:'Descrição do card'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardDiferencialFirst
