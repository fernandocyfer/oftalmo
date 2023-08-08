import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.sass'
import {useEffect} from 'react'
import Modal from "../components/Modal/Modal";

function MyApp({Component, pageProps}) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])

    return (<>
        <div className="container-fluid" style={{padding: 0}}>
            <Navbar id={2}/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    </>)
}

export default MyApp
