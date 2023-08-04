import styles from '/styles/medicos.module.sass'

import formatarCRM from '/pipes/crm.pipe'
import erro from '/public/images/sirueta.png'
import Link from 'next/link'


const MedicoSingle=({medico}) => {

    return (<>
        <Link href={'/equipe/'+medico?.id}>
            <div className={styles.medicosSingle}>
                <div className={styles.medicosSingle_Photo}>
                    <img src={medico?.image?.length.toString()>1&&medico.image!==null? medico.image:erro.src}
                        style={{width: '300px',height: '375px'}} />
                </div>
                <div className={styles.medicosSingle_Description}>
                    <p>Dr(a). {medico?.name??'Nome não encontrado :('}</p>
                    <div className={'d-flex justify-content-center'}>
                        <span>CRM/RJ {formatarCRM(medico?.crm?.toString()??'')}</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>RQE/RJ {medico?.rqe??'0000'}</span>
                    </div>
                    <p>
                        {medico?.especialidadeonmedico? medico.especialidadeonmedico?.map((esp,index) => {
                            if(index===medico.especialidadeonmedico.length-1) {
                                return esp?.especialidades.especialidade+'.'
                            } else {
                                return esp?.especialidades.especialidade+', '
                            }
                        }):''}
                    </p>
                </div>
            </div>
        </Link>
    </>

    )
}


export default MedicoSingle;