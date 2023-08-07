import styles from '../../styles/label.module.sass'
const Label = ({ title, id }) => {
  return (
    <div className={styles.Label}>
      {id == 2 ? (
        <span
          style={{
            display: 'none',
            color: 'red',
            background: 'white',
            borderRadius: '4px',
            fontSize: '12px',
            padding: '6px 12px'
          }}
        >
          {title}
        </span>
      ) : (
        <span>{title}</span>
      )}
    </div>
  )
}

export default Label
