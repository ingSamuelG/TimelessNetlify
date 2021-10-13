import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OrderGeneralCard from './OrderGeneralCard';
import Typography from '@mui/material/Typography';
import AddressCard from './AddressCard';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import EditOffIcon from '@mui/icons-material/EditOff';
import styles from '../styles/Order.module.css'
import { useGlobalContext } from '../context';

const OrderDetails = ({ order }) => {

    const { editOrderFact, editOrderShip, toggleEditFact, toggleEditEnvio } = useGlobalContext()

    const handleEdit = (edit) => {
        switch (edit) {
            case 'Facturacion':
                toggleEditFact()
                break;

            case 'Envio':
                toggleEditEnvio()
                break;

            default:
                break;
        }
    }

    return (
        <Paper elevation={1}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">

                <Grid item lg={4} xs={12}>
                    <div className={styles.cardContainer}>
                        <Typography variant="overline" display="block" gutterBottom style={{ marginLeft: '30px', marginTop: '10px' }}>
                            General
                        </Typography>
                        <OrderGeneralCard date={order.created_ad} state={order.state} email={order.user_email} shipAddress={order.shipAddress} address={order.address} dateShip={order.shipped_date} user_name={order.user_name} user_phone={order.user_phone} />
                    </div>
                </Grid>

                <Grid item lg={4} xs={12}>
                    <div className={styles.cardContainer}>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item xs={6}>
                                <Typography variant="overline" display="block" gutterBottom style={{ marginLeft: '30px', marginTop: '10px' }}>
                                    Facturacion
                                </Typography>
                            </Grid>

                            <Grid item xs={6} style={{ textAlign: 'left' }}>
                                <IconButton aria-label="Editar Facturacion" color={editOrderFact ? 'default' : 'primary'} size='small' onClick={() => {
                                    handleEdit("Facturacion")
                                }}>
                                    {editOrderFact ? <EditOffIcon /> : <EditIcon />}
                                </IconButton>
                            </Grid>

                        </Grid>
                        <AddressCard address={order.address} formVisible={editOrderFact} />
                    </div>
                </Grid>

                <Grid item lg={4} xs={12}>
                    <div className={styles.cardContainer}>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item xs={6}>
                                <Typography variant="overline" display="block" gutterBottom style={{ marginLeft: '30px', marginTop: '10px' }}>
                                    Envio
                                </Typography>
                            </Grid>


                            <Grid item xs={6} style={{ textAlign: 'left' }}>
                                <IconButton aria-label="Editar Facturacion" color={editOrderShip ? 'default' : 'primary'} size='small' onClick={() => {
                                    handleEdit("Envio")
                                }}>
                                    {editOrderShip ? <EditOffIcon /> : <EditIcon />}
                                </IconButton>
                            </Grid>

                        </Grid>
                        <AddressCard address={order.shipAddress} formVisible={editOrderShip} />
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default OrderDetails
