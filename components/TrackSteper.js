import React, { useEffect, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { OrderCard } from './OrderCard';



function getSteps() {
    return ['Orden recibida', 'Pagadas', 'Empacada y lista para despacho', 'Enviada', 'Completada', 'Rembolsada', 'Cancelada'];
}



const TrackSteper = ({ order }) => {
    const steps = getSteps();
    const [isMobile, setisMobile] = useState(false)


    const handleWidth = () => {
        if (window.innerWidth < 800) {
            setisMobile(true)
        } else {
            setisMobile(false)
        }
    }


    useEffect(() => {
        handleWidth()
        window.addEventListener("resize", handleWidth)
        return () => window.removeEventListener("resize", handleWidth)
    }, [])


    return (

        <Grid container direction="row"
            spacing={2}
            justifyContent="flex-start"
            alignItems="flex-start">

            <Grid item xs={12}>
                <Typography variant="h4" display='inline' gutterBottom>
                    Estatus para orden:
                </Typography>
                <Typography variant="h4" display='inline' gutterBottom>
                    {` ${order.id}`}
                </Typography>
                <Divider />
            </Grid>

            <Grid container direction="column"
                spacing={2}
                justifyContent="flex-start"
                alignItems="flex-start">

                <Grid item xs={12}>
                    <Typography variant="subtitle2" display='inline' gutterBottom>
                        Número de cliente:
                    </Typography>
                    <Typography variant="body2" display='inline' gutterBottom>
                        {` ${order.user_id}`}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="subtitle2" display='inline' gutterBottom>
                        Fecha de orden:
                    </Typography>
                    <Typography variant="body2" display='inline' gutterBottom>
                        {` ${order.created_ad}`}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="subtitle2" display='inline' gutterBottom>
                        Fecha de envío:
                    </Typography>
                    <Typography variant="body2" display='inline' gutterBottom>
                        {order.shipped_date ? ` ${order.shipped_date}` : 'Not Shipped'}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container direction="row"
                        justifyContent="flex-start" spacing={0}>

                        <Grid item xs={6}>
                            <Typography variant="subtitle2" display='inline' gutterBottom>
                                Direccion de envio:
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Grid container direction="column" alignItems="flex-start" >
                                <Grid item>
                                    <Typography variant="body2" display='inline'>
                                        {order.address.street}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" display='inline'>
                                        {order.address.building}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" display='inline'>
                                        {order.address.city}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" display='inline'>
                                        {order.address.state}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" display='inline'>
                                        {order.address.country}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="subtitle2" display='inline' gutterBottom>
                    Empresa de encomiendas:
                </Typography>
                <Typography variant="body2" display='inline'>
                    {order.carrier ? ` ${order.carrier}` : 'Not Shipped'}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="subtitle2" display='inline' gutterBottom>
                    Tracking :
                </Typography>
                <Typography variant="body2" display='inline'>
                    {order.tracking ? ` ${order.tracking}` : 'Not Shipped'}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h5" display='inline'>
                    Contenido de la orden:
                </Typography>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <OrderCard order_details={order.order_product} />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Stepper activeStep={3} alternativeLabel={isMobile ? false : true} orientation={isMobile ? 'vertical' : 'horizontal'} >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid>
        </Grid>

    );
}

export default TrackSteper
