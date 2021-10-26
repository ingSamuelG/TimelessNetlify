import React, { useState } from 'react'
import styles from '../../styles/User.module.css'
import UserMenu from '../../components/UserMenu';
import UserContainer from '../../components/UserContainer';
import HeadTag from '../../components/HeadTag';
import { useGlobalContext } from '../../context';
import Grid from '@mui/material/Grid';

export default function Index() {
    const { setSubmenuClosed } = useGlobalContext()
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={styles.container} onMouseOver={setSubmenuClosed}>
            <HeadTag
                title={"Mi perfil en Timeless Closet"}
                description={"El perfil muestra toda la información correspondiente al usuario como sus likes datos y direcciones a usar en los pedidos"}
                robotContent={["index", "follow"]}
                keywords={
                    ["perfil Timeless Closet",
                        "mi perfil",
                        "perfil",
                        "perfil Timeless Closet",
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
            <Grid container
                direction="row"
                alignItems="flex-start"
                justifyContent="center"
                spacing={2}>

                <Grid item lg={3} xs={12}>
                    <UserMenu state={selectedIndex} fun={handleListItemClick} />
                </Grid>

                <Grid item lg={9} xs={12} >
                    <UserContainer menu={selectedIndex} />
                </Grid>
            </Grid>
        </div>
    )
}

Index.layout = 'main'
