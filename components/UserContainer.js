import React, { useState } from 'react'
import AdminOrdersTable from './AdminOrdersTable';
import TrackSteper from './TrackSteper';
import ProductContainer from './ProductContainer'
import AddressContainer from './AddressContainer';
import styles from '../styles/User.module.css';
import UserDetail from './UserDetail';
import Fade from '@mui/material/Fade';
import NoData from './NoData';
import { useGlobalContext } from '../context';

export default function UserContainer({ menu }) {
    // this code has to be fetch from the api 
    const { orders, myUser, myLikes } = useGlobalContext()
    const myOrders = orders.filter((order) => {
        return order.user_id == myUser.id
    })


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const [seeDetails, setSeeDetails] = useState({ id: "", state: false })

    const handleSeeDetailsOpen = (orderId) => {
        setSeeDetails({ id: orderId, state: true })
    }

    const handleSeeDetailsClose = () => {
        setSeeDetails({ id: "", state: false })
    }


    if (menu == 0) {
        return <h2>Inicio</h2>
    }
    if (menu == 1) {

        if (seeDetails.state) {
            const myOrder = orders.find(order => seeDetails.id == order.id)
            return <Fade in={true} timeout={{ enter: 800, exit: 1000 }}><div style={{
                borderRadius: "15px",
                border: "1px solid #eccbdc",
                padding: "50px"
            }}><TrackSteper order={myOrder} funcState={handleSeeDetailsClose} /></div></Fade>
        }

        return <Fade in={true} timeout={{ enter: 800, exit: 1000 }}><div ><AdminOrdersTable orders={myOrders} initialPageSize={5} links={false} funcOpen={handleSeeDetailsOpen} funcClose={handleSeeDetailsClose} /></div></Fade>
    }
    if (menu == 2) {
        return <Fade in={true} timeout={{ enter: 800, exit: 1000 }}><div><AddressContainer addresses={myUser.address} /></div></Fade>
    }
    if (menu == 3) {
        return <Fade in={true} timeout={{ enter: 800, exit: 1000 }} ><div><UserDetail user={myUser} /></div></Fade>
    }
    if (menu == 4) {
        if (myLikes.length > 0) {
            return <Fade in={true} timeout={{ enter: 800, exit: 1000 }} ><div className={styles.bordes}><ProductContainer products={myLikes} tittle={"Te gustan"} AutoWidth={true} /></div></Fade>
        } else {
            return <Fade in={true} timeout={{ enter: 800, exit: 1000 }}><div><NoData message={"Tus likes estan vacios"} imgSrc="/logos/undraw_No_data_re_kwbl.svg" /></div></Fade>

        }



    }


}
