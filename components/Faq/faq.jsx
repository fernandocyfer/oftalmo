import styles from '../../styles/home.module.sass'
import { Button } from '../Button/Button'
import Container from '../Container/Container'
import { Accordion } from 'react-bootstrap'

const Faq = () => (
  <div className={styles.SectionTwelve}>
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Button title={'FAQ'} id={11} style={{ marginLeft: '32px' }} />
          <Container
            idLabel={2}
            label={'FAQ'}
            title={'Tire suas Dúvidas'}
            content={
              ' Está com alguma dúvida sobre os serviços de um oftalmologista e como podemos lhe ajudar? Fique tranquilo(a) pois separamos as perguntas frequentes. Por isso, confira e tire suas dúvidas com a gente!'
            }
          />
        </div>
        <div className="col-md-7">
          <div className={styles.Faq}>
            <div className={styles.FaqItem}>
              <div className={styles.FaqTitle}>
                <Accordion>
                  <Accordion.Item eventKey="0" className={styles.accordionItem}>
                    <Accordion.Header className={styles.accordionHeader}>
                      <h6>O que é oftalmologista?</h6>
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Tortor sed
                        blandit cursus enim metus. Amet sed ultrices leo dictum
                        arcu in lacus at. Faucibus pulvinar lorem amet mauris.
                        <br />
                        <br />
                        Venenatis malesuada at nec velit vitae duis velit.
                        Pellentesque quam dictum ut id nascetur.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className={styles.accordionItem}>
                    <Accordion.Header className={styles.accordionHeader}>
                      <h6>Qual telefone da clínica oftalmológica?</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Tortor sed
                        blandit cursus enim metus. Amet sed ultrices leo dictum
                        arcu in lacus at. Faucibus pulvinar lorem amet mauris.
                        <br />
                        <br />
                        Venenatis malesuada at nec velit vitae duis velit.
                        Pellentesque quam dictum ut id nascetur.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className={styles.accordionItem}>
                    <Accordion.Header className={styles.accordionHeader}>
                      <h6>Qual a diferença entre oculista e oftalmologista?</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Tortor sed
                        blandit cursus enim metus. Amet sed ultrices leo dictum
                        arcu in lacus at. Faucibus pulvinar lorem amet mauris.
                        <br />
                        <br />
                        Venenatis malesuada at nec velit vitae duis velit.
                        Pellentesque quam dictum ut id nascetur.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className={styles.accordionItem}>
                    <Accordion.Header className={styles.accordionHeader}>
                      <h6>
                        Quantos minutos demora uma consulta com oftalmologista?
                      </h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Tortor sed
                        blandit cursus enim metus. Amet sed ultrices leo dictum
                        arcu in lacus at. Faucibus pulvinar lorem amet mauris.
                        <br />
                        <br />
                        Venenatis malesuada at nec velit vitae duis velit.
                        Pellentesque quam dictum ut id nascetur.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Faq
