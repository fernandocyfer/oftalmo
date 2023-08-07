import Label from '../Label/Label'
import styles from '../../styles/container.module.sass'
import Image from 'next/image'
import defaultBg from '../../public/images/default-bg.webp'
import StarIcon from '../../public/icons/star.svg'

export default function Container({
  children,
  label,
  title,
  content,
  idLabel = 1,
  id = 1,
  bgImage,
  dark = false,
  star = false
}) {
  return id == 1 ? (
    <div className={dark ? styles.ContainerDark : styles.ContainerDefault}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <Label
                title={label ? label : 'Label title'}
                id={idLabel ? idLabel : 1}
              />
              <h4>{title ? title : 'Título do container'}</h4>
              {star ? (
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
              ) : null}
              <p>{content ? content : 'Conteúdo do container'}</p>
            </div>
            <div className={styles.Container_cards}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : id == 2 ? (
    <div
      className={styles.ContainerVariant}
      style={{
        backgroundImage: bgImage
          ? `url(${bgImage.src})`
          : `url(${defaultBg.src})`
      }}
    >
      <div className="container d-flex flex-column align-items-center">
        <div className={styles.Container_Content}>
          <Label title={label ? label : 'Label title kkk'} />
          <h4>{title ? title : 'Título do container'}</h4>
          <p>{content ? content : 'Conteúdo do container'}</p>
        </div>
        <div className={styles.Container_cards}>{children}</div>
      </div>
    </div>
  ) : id == 3 ? (
    <div className={dark ? styles.ContainerDark : styles.ContainerDefault}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h4>{title ? title : 'Título do container'}</h4>
              {star ? (
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
              ) : null}
              <p>{content ? content : 'Conteúdo do container'}</p>
            </div>
            <div className={styles.Container_cards}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
