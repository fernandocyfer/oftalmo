import Banner from '../../components/Banner/Banner'
import styles from '/styles/unidadeSingle.module.sass'
import Image from 'next/image'
import simgleVideo from '/public/images/singleUnidadeVideo.svg'
import Breadcrumb from '../../components/BreadCrumb/Breadcrum'
import UnidadeInfo from '../../components/UnidadeInfo/UnidadeInfo'
import axios from 'axios'
import { useRouter } from 'next/router'

const UnidadeName = ({ data }) => {
  const router = useRouter()
  const idDocRender = router.asPath.split('/')[2]
  const docList = data?.filter(un => un.id === idDocRender)
  const docSelected = docList[0]

  console.log(docSelected)

  return (
    <>
      <Banner id={6}>
        <div className={'container-md d-flex flex-column'}>
          <div className={styles.unidadeSingle}>
            <h2>Oftalmologistas na {docSelected.name}</h2>
            <p>
              Nossa Clínica Oftalmológica na Barra da Tijuca tem como propósito
              atender seus pacientes de maneira qualificada, com alta tecnologia
              e rapidez nos processo de diagnósticos, exames e cirurgias.
            </p>
            <div className={'d-flex align-items-center'}>
              <Image src={simgleVideo} width={150} height={90} />
              <span>Faça um tour pela Clínica</span>
            </div>
          </div>
        </div>
      </Banner>
      <Breadcrumb
        to={'unidades/' + docSelected.name}
        title={'Unidades / ' + docSelected.name}
      />

      <UnidadeInfo unidade={docSelected} />
    </>
  )
}

export default UnidadeName

export async function getServerSideProps() {
  const API_KEY = process.env.API_TOKEN
  const API_URL = process.env.BASE_URL
  const dataToSend = {
    token: API_KEY
  }

  const response = await axios.get(`${API_URL}/unidade`, {
    data: dataToSend
  })
  const data = response.data

  return {
    props: {
      data
    }
  }
}
