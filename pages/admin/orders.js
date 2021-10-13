import React from 'react'
import AdminOrdersTable from '../../components/AdminOrdersTable'
import styles from '../../styles/AdminOrder.module.css'
import { useGlobalContext } from "../../context";


export default function admin() {
    const { adminSideBarOpen } = useGlobalContext()

    return (
        <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
            <AdminOrdersTable />
        </div>
    )
}

admin.layout = 'admin'

