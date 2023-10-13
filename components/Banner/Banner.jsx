import styles from '../../styles/banner.module.sass'
import servicoBanner from '../../public/banner/servicosBanner.webp'
import emergencia from '../../public/banner/emergencyBanner.webp'
import unidadeSingle from '../../public/banner/unidadeSingle.webp'
import cirurgias from '../../public/banner/cirurgias.webp'
import examesBanner from '../../public/banner/exames.webp'
import equipeBanner from '../../public/banner/equipeBanner.webp'
import convBanner from '../../public/banner/convenios.webp'
import oftamoKids from '../../public/banner/oftamokidsBanner.webp'
import especialidade1 from '../../public/banner/especialidade1.webp'
import ogrupo from '../../public/banner/ogrupoBanner.webp'
import unidadesBanner from '../../public/banner/unidadesBanner.webp'

import {useRouter} from 'next/router'

export default function Banner(props) {
    const route=useRouter()
    const {id}=props

    return (<div className="flex flex-col items-center justify-center min-h-screen">
        <div
            className={styles.banner}
            style={id===5? {
                background: `url('${emergencia.src}')`,height: '65vh',display: 'flex',justifyContent: 'center'
            }:id===6? {
                background: `url('${unidadeSingle.src}')`,height: '65vh',display: 'flex',justifyContent: 'center'
            }:id===3? {
                background: `url('${servicoBanner.src}')`,height: '711px'
            }:id===11? {
                background: `url('${ogrupo.src}')`,height: '711px'
            }:id===10? {
                background: `url('${examesBanner.src}')`,height: '711px'
            }:id===9? {
                background: `url('${cirurgias.src}')`,height: '711px'
            }:id===2? {
                background: `url('${equipeBanner.src}')`,height: '711px',backgroundPosition: 'top'
            }:id===4? {
                background: `url('${convBanner.src}')`,height: '711px'
            }:id===7? {
                background: `url('${oftamoKids.src}')`,backgroundSize: 'contain',height: '95vh'
            }:id===12? {
                background: `url('${unidadesBanner.src}')`,backgroundSize: 'contain',height: '95vh'
            }:id===8? {
                background: `url('${especialidade1.src}')`,backgroundSize: 'contain',height: '711px'
            }:{
                height: '95vh'
            }}
        >
            {props.children}
            <div className={styles.overlay} />
        </div>
    </div>)
}
