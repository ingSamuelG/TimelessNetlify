import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
import Sublinks from './Sublinks'
import styles from '../styles/Submenu.module.css'


const Submenu = () => {
    const { subMenuOpen, subMenuLocation, currentCategory } = useGlobalContext()
    const container = useRef(null)

    useEffect(() => {
        const submenu = container.current
        const { center, bottom } = subMenuLocation
        const scroll = window.pageYOffset
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
    }, [subMenuLocation])


    return (
        <aside className={subMenuOpen ? [styles.submenu, styles.show].join(' ') : styles.submenu} ref={container} >
            <Sublinks category={currentCategory} ></Sublinks>
        </aside>
    )
}

export default Submenu
