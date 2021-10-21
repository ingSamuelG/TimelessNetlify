import React from 'react'
import AdminOrdersTable from './AdminOrdersTable';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../context';

export default function UserContainer({ menu }) {
    // this code has to be fetch from the api 
    const { orders, myUser } = useGlobalContext()
    const myOrders = orders.filter((order) => {
        return order.user_id == myUser.id
    })
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    if (menu == 0) {
        return <h2>Inicio</h2>
    }
    if (menu == 1) {
        return <AdminOrdersTable orders={myOrders} links={false} />
    }
    if (menu == 2) {
        return <h2>Direccion</h2>
    }
    if (menu == 3) {
        return <h2>Detalles</h2>
    }
    if (menu == 4) {
        return <h2>Me gusta</h2>
    }

}
