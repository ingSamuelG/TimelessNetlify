import React from 'react'
import { useGlobalContext } from '../context'
import styles from '../styles/SizeFilterLink.module.css'

const SizeFilterLink = ({ data }) => {
    const { setProductFilterFromSize, sizeFilterPressed } = useGlobalContext()

    return (
        <div className={styles.card} onClick={() => {
            setProductFilterFromSize(data)
            sizeFilterPressed({ name: data, state: true })
        }}>
            <div className={styles.circle}></div>
            <div className={styles['card-top']}></div>
            <div className={styles.tittle} >
                <p>Size:</p>
            </div>
            <div className={styles.data} >
                {data}
            </div>
        </div>
    )
}

export default SizeFilterLink
