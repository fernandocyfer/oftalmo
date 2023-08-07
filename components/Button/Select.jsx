import Image from 'next/image'
import styles from '../../styles/button.module.sass'
import iconRel from '../../public/icons/person-icon.svg'

const Select = ({ title, options, icon }) => {
  const handleChange = e => {
    setSelected(e.target.value)
  }

  return (
    <>
      <div className={styles.Select}>
        <Image src={icon ? icon : iconRel} height={40} width={40} />
        <select className="form-select" aria-label="Default select example">
          <option selected>{title ? title : 'Selecione uma opção'}</option>
          {options?.map(
            (option, index) => (
              console.log(option),
              (
                <option key={index} value={option} onChange={handleChange}>
                  {option}
                </option>
              )
            )
          )}
        </select>
      </div>
    </>
  )
}

export default Select
