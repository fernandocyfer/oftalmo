import Image from 'next/image'
import styles from '../../styles/statistic.module.sass'
import IconDefault from '../../public/icons/form-icon.svg'

const Statistic=({image,title,subtitle}) => {
  return (
    <div className={styles.StatisticBox}>
      <div className="d-flex align-items-center statisticBoxMobile">
        <div className={styles.ImageStatistic}>
          <Image src={image? image:IconDefault} />
        </div>
        <div className={styles.boxDescription}>
          <p className={styles.Title}>{title? title:'Título do dado'}</p>
          <p className={styles.subTitle}>
            {subtitle? subtitle:'Label do dado'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Statistic
