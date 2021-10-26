import React, { useState } from 'react'
import AdminOrdersTable from '../../components/AdminOrdersTable'
import styles from '../../styles/AdminOrder.module.css'
import { useGlobalContext } from "../../context";


export default function Admin() {
    const { adminSideBarOpen, orders } = useGlobalContext()



    return (
        <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
            <AdminOrdersTable orders={orders} initialPageSize={10} />
        </div>
    )
}

Admin.layout = 'admin'

