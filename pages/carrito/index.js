import React from 'react';
import styles from '../../styles/Add.module.css'
import ProductMobileTableCart from '../../components/ProductMobileTableCart';
import { useGlobalContext } from '../../context';
import HeadTag from '../../components/HeadTag';
import AddressForm from '../../components/AddressForm';
import CartTable from '../../components/CartTable';
import AddressSelection from '../../components/AddressSelection';
import Grid from '@mui/material/Grid';

export default function Index() {
    const { setSubmenuClosed } = useGlobalContext()


    return (
        <div className={styles.container} onMouseOver={setSubmenuClosed}>
            <HeadTag
                title={"Mi carrito en Timeless Closet store"}
                description={"el carrito Timeless Closet es el lugar donde todos tus productos seleccionados están hasta que realices el procesos final de compra"}
                robotContent={["index", "follow"]}
                keywords={
                    ["carrito Timeless Closet ",
                        "carrito",
                        "shopping cart",
                        "pagar Timeless Closet",
                        "pagar timeless closet",
                        "Tienda de ropa",
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

            <div className={styles.main}>

                <Grid container direction='row' spacing={5} justifyContent="center"
                    alignItems="center">

                    <Grid item xs={12} className={styles["desktop-cart"]}>
                        <CartTable />
                    </Grid>

                    <Grid item xs={12} className={styles["mobile-cart"]}>
                        <ProductMobileTableCart />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <AddressForm />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <AddressSelection />
                    </Grid>


                </Grid>
            </div>
        </div >
    )
}

Index.layout = 'main'
