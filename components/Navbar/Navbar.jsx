import Link from 'next/link'
import logoWhite from '../../public/white-logo.svg'
import logo from '../../public/logo.webp'
import Image from 'next/image'
import styles from '../../styles/navbar.module.sass'
import hamburguer from '../../public/mobile/hamburguer.webp'
import {useRouter} from 'next/router'
import {Button} from '../Button/Button'
import btnEmergency from '../../public/icons/btnEmergency.svg'

export default function Navbar({footer}) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const navigation=[
        {name: 'Home',href: '/'},
        {
            name: 'O Grupo',
            href: '/ogrupo',


        },
        {
            name: 'Equipe Médica',
            href: '/equipe'
        },
        {name: 'Convênios',href: '/convenios'},
        {name: 'Unidades',href: '/unidades'},
        {
            name: 'Serviços',
            href: '/servicos',
            subRoutes: [
                {
                    name: 'Especialidades',
                    href: '/servicos/especialidades'
                },
                {
                    name: 'Exames',
                    href: '/servicos/exames'
                },
                {
                    name: 'Cirurgias',
                    href: '/servicos/cirurgias'
                }
            ]
        },

        {
            name: 'Aprenda mais',
            href: '/',
            subRoutes: [
                {
                    name: 'Blog',
                    href: 'https://wordpress-576870-3751630.cloudwaysapps.com/'
                },
                {
                    name: 'Materiais Gratuitos',
                    href: 'https://wordpress-576870-3751630.cloudwaysapps.com/materiais-gratuitos/'

                }
            ]
        },
        {
            name: 'Oftalmokids',
            href: '/oftalmokids'
        },
    ]

    const router=useRouter()

    return (
        <>
            <div id="navbar-container" className={styles.navbar}>
                <Link href={'/'}>
                    <Image
                        alt="image-alt"
                        title="image-title"
                        objectFit="contain"
                        src={logo}
                        className={styles.logo}
                    />
                </Link>

                <div className={styles.navlist}>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    {navigation.map(item => {
                                        if(!item.subRoutes?.length>0) {
                                            return (
                                                <Link href={item.href} key={item.name}>
                                                    <a
                                                        className={classNames(
                                                            'inline-flex items-center m-3 px-1 pt-1 border-b-2 text-sm font-medium',
                                                            router.route===item.href? styles.current:null
                                                        )}
                                                        aria-current={
                                                            router.route===item.href? 'page':undefined
                                                        }
                                                    >
                                                        <li
                                                            className="nav-item"
                                                            style={{fontSize: '1rem'}}
                                                        >
                                                            {item.name}
                                                        </li>
                                                    </a>
                                                </Link>
                                            )
                                        } else {
                                            return (
                                                <a
                                                    style={{margin: '0.7rem',color: 'blue'}}
                                                    className={classNames(
                                                        'inline-flex items-center px-1 border-b-2 text-sm font-medium',
                                                        router.route===item.href? styles.current:null
                                                    )}
                                                    aria-current={
                                                        router.route===item.href? 'page':undefined
                                                    }
                                                >
                                                    <li
                                                        className="nav-item dropdown"
                                                        style={{fontSize: '1rem'}}
                                                    >
                                                        <a
                                                            className="nav-link dropdown-toggle"
                                                            href="#"
                                                            role="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            {item.name}
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            {item.subRoutes?.map(sub => (
                                                                <Link href={sub.href} key={item.name}>
                                                                    <a
                                                                        className={classNames(
                                                                            'inline-flex items-center border-b-2 text-sm font-medium dropdown-item',
                                                                            router.route===item.href
                                                                                ? styles.current
                                                                                :null
                                                                        )}
                                                                        aria-current={
                                                                            router.route===item.href
                                                                                ? 'page'
                                                                                :undefined
                                                                        }
                                                                    >
                                                                        <li
                                                                            className="nav-item"
                                                                            style={{fontSize: '1rem'}}
                                                                        >
                                                                            {sub.name}
                                                                        </li>
                                                                    </a>
                                                                </Link>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                </a>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="gap-3 navMobileAg">
                    <Button title={'AGENDE AGORA'} id={1} to={'https://web.whatsapp.com/send?phone=552124961161&text='}
                    />
                </div>

                <div className={styles.mobileMenu}>
                    <div className="d-flex gap-3 navMobileEmergency">
                        <Image width={45} height={45} src={btnEmergency} to={'/'} />
                    </div>
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                    >
                        <Image alt="image-alt" title="image-title" src={hamburguer} />
                    </button>

                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasRight"
                        aria-labelledby="offcanvasRight"
                        style={{backgroundColor: '#0075FF'}}
                    >
                        <div className={`offcanvas-header ${styles.navMobileHead}`}>
                            <Link href={'/'}>
                                <Image
                                    alt="image-alt"
                                    title="image-title"
                                    src={logoWhite}
                                    objectFit="contain"
                                    className={styles.logo}
                                />
                            </Link>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className={`offcanvas-body ${styles.navMobileBody}`} onClick={
                            () => {
                                document.querySelector('.offcanvas').classList.remove('show')
                                document.querySelector('.offcanvas-backdrop').classList.remove('show')
                                document.querySelector('body').style.overflow='auto'
                                document.querySelector('body').style.paddingRight='0'
                            }

                        }>
                            {navigation.map(item => (
                                <Link href={item.href} key={item}
                                >
                                    <a
                                        className={classNames(
                                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                                            router.route===item.href? styles.current:null
                                        )}
                                        aria-current={
                                            router.route===item.href? 'page':undefined
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
