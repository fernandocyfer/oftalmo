import Banner from "/components/Banner/Banner";
import styles from "/styles/servicos.module.sass";

import {Button} from "/components/Button/Button";
import Breadcrumb from "/components/BreadCrumb/Breadcrum";
import Search from "/components/Search/Search";

import Faq from "/components/Faq/faq";
import Depoimentos from "/components/Depoimentos/Depoimentos";

import PlanosConvenios from "/components/PlanosConvenios/PlanosConvenios";
import FormAtendimento from "/components/FormAtendimento/FormAtendimento";

const Exames = () => (<>
    <Banner id={10}>
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <div className={styles.Hero}>
                        <h2>Exames Oftalmológicos</h2>
                        <p>
                            Na Americas Oftalmocenter você consegue realizar seus exames oftalmológicos no Rio de
                            Janeiro com a qualidade e atendimento de profissionais capacitados. Se você está procurando
                            um oftalmologista no Rio de Janeiro para realizar um exame de vista, diagnosticar alguma
                            doença ocular ou outros exames oftalmológicos, confira a lista abaixo e agende agora sua
                            consulta.
                        </p>
                        <div className='d-flex'>
                            <Button
                                style={{marginRight: '32px'}}
                                title={'Agendar consulta'}
                                id={10}
                                to={'https://web.whatsapp.com/send?phone=552124961161&text='}
                            />

                            <Button
                                title={'Emergência Oftalmológica\n'}
                                id={6}
                                to={'/'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Banner>
    <Breadcrumb to={'/servicos/exames'} title={' servicos / exames'}/>
    <Search>
        <div className={'d-flex flex-column'}>
            <Button id={7} title={'Anestesista'}/>
            <Button id={7} title={'Catarata'}/>
            <Button id={7} title={'Ceratocone'}/>
            <Button id={7} title={'Cirurgia Refrativa (Correção de grau à laser)'}/>
            <Button id={7} title={'Córnea'}/>
            <Button id={7} title={'Diretor Médico'}/>
            <Button id={7} title={'Diretora Médica'}/>
            <Button id={7} title={'Estética'}/>
            <Button id={7} title={'Estrabismo'}/>
            <Button id={7} title={'Glaucoma'}/>
            <Button id={7} title={'Lentes de Contato'}/>
        </div>
        <div className={'d-flex flex-column'}>
            <Button id={7} title={'Oftalmogeriatria'}/>
            <Button id={7} title={'Oftalmologia Clínica (Geral)'}/>
            <Button id={7} title={'Oftalmopediatria'}/>
            <Button id={7} title={'Órbita'}/>
            <Button id={7} title={'Ortoptista'}/>
            <Button id={7} title={'Plástica Ocular ou Oculoplástica'}/>
            <Button id={7} title={'Retina'}/>
            <Button id={7} title={'Retina Cirúrgica'}/>
            <Button id={7} title={'Retina Clínica e Vítreo'}/>
            <Button id={7} title={'Transplante de córnea'}/>
            <Button id={7} title={'Vias Lacrimais'}/>
        </div>
    </Search>

    <Faq/>

    <Depoimentos/>

    <PlanosConvenios/>


    <FormAtendimento/>
</>)


export default Exames;
