import styles from '../../styles/home.module.sass'
import {Button} from '../Button/Button'
import Container from '../Container/Container'
import {Accordion} from 'react-bootstrap'
import faq from '/mocks/faq.mock.json';
import {useEffect, useState} from "react";
import {bodyStreamToNodeStream} from "next/dist/server/body-streams";


const Faq = ({id}) => {

    const [currentFaq, setCurrentFaq] = useState([]);

    useEffect(() => {
        const handleFaq = () => {
            const curentFaq = faq.filter((f) => (f.id === id));
            setCurrentFaq(curentFaq[0]?.content)
        }
        handleFaq();
    }, [])


    return (<div className={styles.SectionTwelve}>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <Button title={'FAQ'} id={11} style={{marginLeft: '32px'}}/>
                    <Container
                        idLabel={2}
                        label={'FAQ'}
                        title={'Tire suas Dúvidas'}
                        content={' Está com alguma dúvida sobre os serviços de um oftalmologista e como podemos lhe ajudar? Fique tranquilo(a) pois separamos as perguntas frequentes. Por isso, confira e tire suas dúvidas com a gente!'}
                    />
                </div>
                <div className="col-md-7">
                    <div className={styles.Faq}>
                        <div className={styles.FaqItem}>
                            <div className={styles.FaqTitle}>
                                <Accordion>
                                    {
                                        currentFaq?.map((f, i) => (
                                            <Accordion.Item key={i} eventKey={i}
                                                            className={styles.accordionItem}>
                                                <Accordion.Header className={styles.accordionHeader}>
                                                    <h6>
                                                        <div dangerouslySetInnerHTML={{__html: f?.title}}/>
                                                    </h6>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordionBody}>
                                                    <div dangerouslySetInnerHTML={
                                                        {__html: f.content}
                                                    }/>
                                                </Accordion.Body>
                                            </Accordion.Item>))
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Faq
