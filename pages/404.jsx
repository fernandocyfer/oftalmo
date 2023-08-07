import Image from 'next/image'
import { Button } from '../components/Button/Button'
import styles from '../styles/404.module.sass'
import ImageError from '../public/images/error404.svg'
import DivisorError from '../public/images/divisor404.svg'
import Container from '../components/Container/Container'

import pcIcon from '../public/icons/pc-blue-icon.png'
import phoneIcon from '../public/icons/phone-blue-icon.png'
import whatsAppIcon from '../public/icons/whatsapp-blue-icon.png'

function NotFound() {
  return (
    <div className={`container-fluid ${styles.notFound}`}>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-9 p-0 d-flex justify-content-center flex-column ">
          <div className={`d-flex ${styles.notFound_title}`}>
            <Image alt="image-alt" title="image-title" src={''} />
          </div>
          <div className="container p-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3>A página que você buscou não foi encontrada.</h3>
                <Image src={DivisorError} />
                <p>A página solicitada não pôde ser encontrada.</p>
                <Button title={'VOLTAR AO INÍCIO'} id={13} to={'/'} />
              </div>
              <div className="col-md-6">
                <Image src={ImageError} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.SectionThirteen}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Container
                idLabel={2}
                label={'FALE AGORA CONOSCO'}
                title={
                  'Agende rapidamente sua consulta ou tire todas as suas dúvidas.'
                }
                content={'Nossa equipe está pronta para lhe atender.'}
                dark={true}
              />
              <div
                className="col-12 d-flex flex-column"
                style={{ padding: '2rem 0' }}
              >
                <div className="col-12">
                  <div className={styles.Contact}>
                    <div className={styles.ContactItem}>
                      <div className={styles.ContactIcon}>
                        <Image src={whatsAppIcon} />
                      </div>
                      <p>(21) 2496-1161</p>
                      <Button dark title={'Converse pelo WhatsApp'} id={2} />
                    </div>
                    <div className={styles.ContactItem}>
                      <div className={styles.ContactIcon}>
                        <Image src={phoneIcon} />
                      </div>
                      <p>(21) 2496-1161</p>
                      <Button dark title={'Ligue agora'} id={2} />
                    </div>
                    <div className={styles.ContactItem}>
                      <div className={styles.ContactIcon}>
                        <Image src={pcIcon} />
                      </div>
                      <p>Agendamento Online</p>
                      <Button dark title={'Reserve agora'} id={2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
