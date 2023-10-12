import styles from '../../styles/home.module.sass'
import Container from '../Container/Container'
import Image from 'next/image'
import whatsAppIcon from '../../public/icons/whatsapp-blue-icon.png'
import {Button} from '../Button/Button'
import phoneIcon from '../../public/icons/phone-blue-icon.png'
import pcIcon from '../../public/icons/pc-blue-icon.png'
import formPhoto from '../../public/images/form-photo.webp'
import {Form,InputGroup} from 'react-bootstrap'
import userIcon from '../../public/icons/person-icon.svg'
import mailIcon from '../../public/icons/mail.svg'
import telIcon from '../../public/icons/call.svg'
import {useWindowSize} from '@uidotdev/usehooks'

const FormAtendimento=({hasContact=true}) => {

  const size=useWindowSize()


  return (<>
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
              content={
                'Nossa central de atendimento funciona 24h por dia. Entre em contato por telefone ou WhatsApp. Nossa equipe está pronta para lhe atender.'
              }
              dark={true}
            />
            <div
              className="col-12 d-flex flex-column"
              style={{padding: '2rem 0'}}
            >
              <div className="col-12">
                <div className={styles.Contact}>
                  <div className={styles.ContactItem}>
                    <div className='d-flex align-items-center flex-lg-column flex-row'>
                      <div className={styles.ContactIcon}>
                        <Image src={whatsAppIcon} />
                      </div>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <p>(21) 2496-1161</p>
                    </div>

                    <Button dark title={'Converse pelo WhatsApp'} id={2} target="_blank" to={'https://wa.me/5512212491116?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta.'} />
                  </div>
                  <div className={styles.ContactItem}>
                    <div className='d-flex align-items-center flex-lg-column flex-row'>
                      <div className={styles.ContactIcon}>
                        <Image src={phoneIcon} />
                      </div>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <p>(21) 2496-1161</p>

                    </div>
                    <Button dark title={'Ligue agora'} id={2} to={'tel:2124961161'}/>
                  </div>
                  <div className={styles.ContactItem}>
                    <div className='d-flex align-items-center flex-lg-column flex-row'>
                      <div className={styles.ContactIcon}>
                        <Image src={phoneIcon} />
                      </div>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <p>&nbsp;
                        &nbsp;Agendamento online</p>
                    </div>
                    <Button dark title={'Reseve agora'} id={2} target="_blank" to={'https://wa.me/552124961161?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta'} />
                  </div>

                </div>
              </div>
            </div>
            {hasContact? (
              <div
                className={styles.FormContainer}
                style={hasContact? {marginBottom: '-40%'}:null}
              >
                <div className="col-12 d-flex justify-content-center porraa">
                  <div className="col-5 d-flex align-items-center">
                    <div className={styles.formPhoto}>
                      <Image src={formPhoto} />
                    </div>
                  </div>
                  <div className={styles.formWrapper}>
                    <div className="col-12">
                      <form action="">
                        <div>
                          <Button title={'Fale Conosco'} id={11} />
                        </div>
                        <h5>
                          Nós entramos em contato
                          <br /> com você!
                        </h5>
                        <div className="col-12">
                          <div className={styles.formGroup}>
                            <label htmlFor="Username">Nome</label>
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <Image src={userIcon} />
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="Seu nome"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </InputGroup>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className={styles.formGroup}>
                            <label htmlFor="Email">Email</label>
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <Image src={mailIcon} />
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="Email@paracontato.com.br"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                              />
                            </InputGroup>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className={styles.formGroup}>
                            <label htmlFor="Phone">Telefone</label>
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <Image src={telIcon} />
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="+55 (99) 9 0000-0000"
                                aria-label="Phone"
                                aria-describedby="basic-addon1"
                              />
                            </InputGroup>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className={styles.formGroup}>
                            <Button
                              title={'Enviar contato'}
                              id={1}
                              type={'submit'}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ):null}
          </div>
        </div>
      </div>
    </div>

    <div
      className={styles.SectionFourteen}
      style={hasContact&&size.width>800? {padding: '15rem 0'}:hasContact&&size.width<800? {padding: '5rem 0'}:null}
    ></div>
  </>
  )
}
export default FormAtendimento
