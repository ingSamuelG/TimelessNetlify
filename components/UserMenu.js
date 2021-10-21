import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from '../styles/User.module.css'
import List from '@mui/material/List';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';


export default function UserMenu({ state, fun }) {


    return (
        <Box className={styles.main}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    selected={state === 0}
                    onClick={(event) => fun(event, 0)}
                >
                    <ListItemIcon>
                        <QueryStatsIcon color={state === 0 ? "secondary" : "default"} />
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />
                </ListItemButton>

                <Divider />

                <ListItemButton
                    selected={state === 1}
                    onClick={(event) => fun(event, 1)}
                >
                    <ListItemIcon>
                        <ShoppingCartIcon color={state === 1 ? "secondary" : "default"} />
                    </ListItemIcon>
                    <ListItemText primary="Pedidos" />
                </ListItemButton>

                <Divider />

                <ListItemButton
                    selected={state === 2}
                    onClick={(event) => fun(event, 2)}
                >
                    <ListItemIcon>
                        <HomeIcon color={state === 2 ? "secondary" : "default"} />
                    </ListItemIcon>
                    <ListItemText primary="Dirección" />
                </ListItemButton>

                <Divider />

                <ListItemButton
                    selected={state === 3}
                    onClick={(event) => fun(event, 3)}
                >
                    <ListItemIcon>
                        <AccountCircleIcon color={state === 3 ? "secondary" : "default"} />
                    </ListItemIcon>
                    <ListItemText primary="Detalles de la cuenta" />
                </ListItemButton>

                <Divider />

                <ListItemButton
                    selected={state === 4}
                    onClick={(event) => fun(event, 4)}
                >
                    <ListItemIcon>
                        <FavoriteIcon color={state === 4 ? "secondary" : "default"} />
                    </ListItemIcon>
                    <ListItemText primary="Me gusta" />
                </ListItemButton>

                <Divider />

                <ListItemButton

                >
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar sesión" />
                </ListItemButton>

            </List>

        </Box>
    );
}
