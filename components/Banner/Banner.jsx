import styles from '../../styles/banner.module.sass'
import servicoBanner from '../../public/banner/servicosBanner.svg';
import emergencia from '../../public/banner/emergencyBanner.svg';
import unidadeSingle from '../../public/banner/unidadeSingle.svg';
import cirurgias from '../../public/banner/cirurgias.svg';
import examesBanner from '../../public/banner/exames.svg';
import equipeBanner from '../../public/banner/equipeBanner.svg';
import convBanner from '../../public/banner/convenios.svg';
import oftamoKids from '../../public/banner/oftamokidsBanner.svg';

import {useRouter} from 'next/router'

export default function Banner(props) {
    const route = useRouter()
    const {id} = props;


    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div
                className={styles.banner}
                style={
                    id === 5 ? ({
                            background: `url('${emergencia.src}')`,
                            height: '55vh',
                            display: 'flex',
                            justifyContent: 'center'
                        }) :
                        id === 6 ? ({
                                background: `url('${unidadeSingle.src}')`,
                                height: '55vh',
                                display: 'flex',
                                justifyContent: 'center'
                            }) :
                            id === 3 ? (
                                {
                                    background: `url('${servicoBanner.src}')`,
                                    height: '511px'

                                }) : id === 10 ? (
                                {
                                    background: `url('${examesBanner.src}')`,
                                    height: '511px'

                                }) : id === 9 ? (
                                {
                                    background: `url('${cirurgias.src}')`,
                                    height: '511px'

                                }) : id === 2 ? (
                                {
                                    background: `url('${equipeBanner.src}')`,
                                    height: '511px'
                                }) : id === 4 ? (
                                {
                                    background: `url('${convBanner.src}')`,
                                    height: '511px'

                                }) : id === 7 ? (
                                {
                                    background: `url('${oftamoKids.src}')`,
                                    backgroundSize: 'contain',
                                    height: '85vh'
                                }) : ({
                                height: '85vh',
                            })}
            >
                {props.children}
                <div className={styles.overlay}/>
            </div>
        </div>
    )
}
