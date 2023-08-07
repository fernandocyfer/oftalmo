import Image from 'next/image'
import pedPadrao from '/public/images/pediatra.svg'

const CardDocKid = () => (
  <>
    <div
      style={{
        padding: '16px 8px',
        backgroundColor: 'white',
        width: '272px',
        margin: '60px'
      }}
    >
      <Image src={pedPadrao} />
      <p>Dra. Barbara Guilherme</p>
      <span>CRM/RJ 52.81020-7 </span>
      <p>
        <bold>Oftalmopediatria</bold>, e especialista em Estrabismo.
      </p>
    </div>
  </>
)

export default CardDocKid
