import React from 'react';
import HeadTag from '../../components/HeadTag';
import Fade from '@mui/material/Fade';
import { useGlobalContext } from '../../context';
import Grid from '@mui/material/Grid';
import styles from '../../styles/TrackPage.module.css'
import TrackSteper from '../../components/TrackSteper';
import OrderTrackForm from '../../components/OrderTrackForm';


export default function TrackPage() {
    const { setSubmenuClosed, traking, orders, toggleTracking } = useGlobalContext()

    return (
        <div className={styles.container} onMouseOver={setSubmenuClosed}>
            <HeadTag
                title={"Buscar tu orden Timeless Closet"}
                description={"Puedes hacer tracking constante de tus paquetes comprados en nuestra tienda Timeless Closet"}
                robotContent={["index", "follow"]}
                keywords={
                    ["Tienda de ropa",
                        "Tienda en internet",
                        "Tienda de segunda mano",
                        "tiendas en linea",
                        "comprar por internet",
                        "vender ropa usada",
                        "ropa segunda mano",
                        "paginas para comprar",
                        "comprar ropa de segunda mano",
                        "ropa moschino",
                        "tienda online",
                        "tienda online en mexico",
                        "ropa fendi",
                        "tienda de ropa de segunda mano",
                        "ropa calzedonia",
                        "mejor precio",
                        "zapatos",
                        "comprar zapatos",
                        "comprar zapatos segunda mano",
                        "zapatos segunda mano",
                        "lentes",
                        "comprar lentes",
                        "comprar lentes segunda mano",
                        "lentes segunda mano",
                        "bolsas",
                        "comprar bolsas",
                        "comprar bolsas segunda mano",
                        "bolsas segunda mano"]} />
            <Grid container direction="row"
                spacing={10}
                justifyContent="center"
                alignItems="center" >

                <Grid item xs={12}>
                    <OrderTrackForm />
                </Grid>
                <Fade in={traking}>
                    <Grid item xs={12}>
                        <TrackSteper order={orders[0]} funcState={toggleTracking} />
                    </Grid>
                </Fade>
            </Grid>
        </div>
    )
}


TrackPage.layout = 'main'