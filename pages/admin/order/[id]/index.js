import React from 'react'
import styles from '../../../../styles/Order.module.css'
import OrderDetails from '../../../../components/OrderDetails';
import { data } from '../../../../PublicData';
import Typography from '@mui/material/Typography';
// import ProductOrderDetails from '../components/ProductOrderDetails';
import Grid from '@mui/material/Grid';
import ProductOrderDetails from '../../../../components/ProductOrderDetails'
import { useGlobalContext } from "../../../../context";


const Order = ({ order }) => {
    const { adminSideBarOpen } = useGlobalContext()



    return (
        <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
            <div className={styles.main}>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3} >
                    <Grid item lg={12}>
                        <Typography variant="h4" display='inline' gutterBottom>
                            Editar pedido:
                        </Typography>
                    </Grid>

                    <Grid item lg={12}>
                        <OrderDetails order={order} />
                    </Grid>

                    <Grid item lg={12}>
                        <ProductOrderDetails products={order.order_product} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

// this code is only for front end testing propuse we shuld get the product from a api or fetch

export const getStaticProps = async (context) => {
    const order = data.orders.find((order) => order.id === context.params.id)
    return {
        props: {
            order,
        },
    }
}

export const getStaticPaths = async () => {

    const ids = data.orders.map(order => order.id)
    const paths = ids.map((id => ({ params: { id: id.toString() } })))

    return { paths, fallback: false }
}


Order.layout = 'admin'

export default Order
