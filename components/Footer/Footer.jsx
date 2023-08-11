import styles from '../../styles/footer.module.sass'
import logo from '../../public/white-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import faceIcon from '../../public/icons/social/Facebook.svg'
import twitterIcon from '../../public/icons/social/Twitter.svg'
import instaIcon from '../../public/icons/social/Instagram.svg'
import gitIcon from '../../public/icons/social/Github.svg'
import linkedinIcon from '../../public/icons/social/LinkedIn.svg'

const Footer = () => {
    return (
        <>
            <div className={styles.Footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex footerRowDois">
                            <div className="col-2">
                                <div className={styles.LogoBox}>
                                    <Image src={logo}/>
                                </div>
                            </div>
                            <p>
                                Nosso comprometimento é oferecer aos nossos pacientes o que há
                                de mais moderno. Além disso, nossos profissionais estão sempre
                                se atualizando em busca dos melhores procedimentos. E para
                                entregar os melhores resultados, buscamos equipar nossas
                                unidades com tecnologia de última geração.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 containerMenusMobile">
                            <div>
                                <ul className="footerMenuUm">
                                    <li>
                                        <Link href={'/'}>Equipe Médica</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>Convênios</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>Unidades</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footerMenuDois">
                                    <li>
                                        <Link href={'/'}>Serviços</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>Aprenda Mais</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>Política & Privacidade</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.SocialMedia}>
                <div className="container">
                    <div className={styles.Copyright}>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <p>
                                    © 2023 Americas Oftalmocenter. Todos os direitos reservados.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex">
                                <ul className="d-flex align-items-center">
                                    <li>
                                        <Link href={'/'} target={'_blank'}>
                                            <Image src={faceIcon}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} target={'_blank'}>
                                            <Image src={twitterIcon}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} target={'_blank'}>
                                            <Image src={instaIcon}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} target={'_blank'}>
                                            <Image src={gitIcon}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} target={'_blank'}>
                                            <Image src={linkedinIcon}/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
