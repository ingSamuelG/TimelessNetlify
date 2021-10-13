import React from 'react'
import { useGlobalContext } from '../context'
import styles from '../styles/ColorCard.module.css'

const ColorFilterLink = ({ data }) => {

    const { setProductFilterFromColors, colorFilterPressed } = useGlobalContext()

    return (<div className={styles.rounded} style={{ backgroundColor: `${data.hex}` }} onClick={() => {
        setProductFilterFromColors(data.id) /* this will be a fecht to the api filtering from colors*/
        colorFilterPressed({ name: data.name, state: true })
    }}>
    </div >
    )
}

export default ColorFilterLink
