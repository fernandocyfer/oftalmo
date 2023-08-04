
import Image from 'next/image'
import styles from '../../styles/singleContainer.module.sass'


const SingleContainer = ({children, title, description, image, label, bgColor = '#F0F9FF'}) => {
    return (
        <div className={styles.singleContainer}>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className=" d-flex flex-column ">
                        <div className="row">
                            <div className={styles.titleContent}>
                                <div className="col-12">
                                    <h1>
                                        {title}
                                    </h1>
                                    <p className={styles.callText}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {children}
                    </div>
                </div>
            </div>
        </div>)
}

export default SingleContainer
