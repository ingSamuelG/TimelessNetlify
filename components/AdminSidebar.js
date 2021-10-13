import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Badge from '@mui/material/Badge';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from '@mui/material/Grid';
import AssignmentIcon from "@mui/icons-material/Assignment";
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import PaletteIcon from '@mui/icons-material/Palette';
import TableChartIcon from '@mui/icons-material/TableChart';
import CopyrightIcon from '@mui/icons-material/Copyright';
import CategoryIcon from '@mui/icons-material/Category';
import StyleIcon from '@mui/icons-material/Style';
import { useGlobalContext } from "../context";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import styles from '../styles/AdminSidebar.module.css'
import AdminCollapse from './AdminCollapse';
import AdminMenuLink from './AdminMenuLink';
import Link from 'next/link';
import { ListItemButton } from '@mui/material';

const AdminSidebar = () => {

    const { adminSideBarOpen, toggleSideBarAdmin, orders } = useGlobalContext()

    const activeOrders = orders.filter((order) => {
        return (order.state <= 3)
    }).length


    // const [open, setOpen] = useState(false)
    const [toggleProduct, setToggleProduct] = useState(false)
    const [toggleTable, setToggleTable] = useState(false)
    const [toggleColor, setToggleColor] = useState(false)
    const [toggleSize, setToggleSize] = useState(false)
    const [toggleBrand, setToggleBrand] = useState(false)
    const [toggleCategory, setToggleCategory] = useState(false)
    const [toggleSubcategory, setToggleSubcategory] = useState(false)


    const toggleOpen = (func, state) => {
        func(!state)
    }

    return (
        <div className={`${styles.sidebar} ${adminSideBarOpen ? styles.sidebarClosed : null}`}>
            <List className={styles.list} component='nav' aria-label='main mailbox folders'>
                <ListItem >
                    <Grid container direction='row' justifyContent='flex-end'>
                        <IconButton size='small' aria-label="close" onClick={() => {
                            toggleOpen(toggleSideBarAdmin, adminSideBarOpen)
                            toggleOpen(setToggleProduct, true)
                            toggleOpen(setToggleTable, true)
                        }}>
                            {adminSideBarOpen ? <ArrowForwardIosIcon fontSize='small' /> : <ArrowBackIosIcon fontSize='small' />}
                        </IconButton>
                    </Grid>
                </ListItem>

                <ListItem >
                    <Grid container
                        spacing={2}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Grid item xs={12}>
                            <Avatar alt="Remy Sharp" src="../avatar/my_profile.jpg" />
                        </Grid>

                        <Grid item xs={12}>
                            <Fade in={!adminSideBarOpen} timeout={{ enter: 2500, exit: 400 }}>
                                <Typography variant='body2' gutterBottom>
                                    Bienvenido usuario
                                </Typography>
                            </Fade>
                            <Divider />
                        </Grid>
                    </Grid>
                </ListItem>

                <Link href="/admin/orders">
                    <ListItemButton>
                        <>
                            <ListItemIcon>
                                <Badge
                                    badgeContent={activeOrders}
                                    color='secondary'
                                >
                                    <AssignmentIcon />
                                </Badge>
                            </ListItemIcon>
                            <Fade in={!adminSideBarOpen} timeout={1200}>
                                <ListItemText primary='Ordenes' />
                            </Fade>
                        </>
                    </ListItemButton>
                </Link>

                <AdminMenuLink func={() => { toggleOpen(setToggleProduct, toggleProduct) }} menuIcon={<LocalMallIcon />} primaryText='Producto' mainState={adminSideBarOpen} stateCollapse={toggleProduct} />

                <AdminCollapse state={toggleProduct} primaryText='producto' clase={styles.nested} />

                <AdminMenuLink func={() => { toggleOpen(setToggleTable, toggleTable) }} menuIcon={<TableChartIcon />} primaryText='Tablas' mainState={adminSideBarOpen} stateCollapse={toggleTable} />

                <Collapse in={toggleTable} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                        {/* color */}
                        <AdminMenuLink func={() => { toggleOpen(setToggleColor, toggleColor) }} menuIcon={<PaletteIcon color='secondary' />} primaryText='Color' mainState={adminSideBarOpen} stateCollapse={toggleColor} nested nestedClass={styles.nested} />
                        <Divider />
                        <AdminCollapse state={toggleColor} primaryText='color' clase={styles['nested-2-level']} />

                        {/* tamaño */}
                        <AdminMenuLink func={() => { toggleOpen(setToggleSize, toggleSize) }} menuIcon={<FormatSizeIcon color='secondary' />} primaryText='Talla' mainState={adminSideBarOpen} stateCollapse={toggleSize} nested nestedClass={styles.nested} />
                        <AdminCollapse state={toggleSize} primaryText='talla' clase={styles['nested-2-level']} />
                        <Divider />

                        {/* marca */}
                        <AdminMenuLink func={() => { toggleOpen(setToggleBrand, toggleBrand) }} menuIcon={<CopyrightIcon color='secondary' />} primaryText='Marcas' mainState={adminSideBarOpen} stateCollapse={toggleBrand} nested nestedClass={styles.nested} />
                        <AdminCollapse state={toggleBrand} primaryText='marca' clase={styles['nested-2-level']} />
                        <Divider />

                        {/* Category */}
                        <AdminMenuLink func={() => { toggleOpen(setToggleCategory, toggleCategory) }} menuIcon={<CategoryIcon color='secondary' />} primaryText='Categorias' mainState={adminSideBarOpen} stateCollapse={toggleCategory} nested nestedClass={styles.nested} />
                        <AdminCollapse state={toggleCategory} primaryText='categoria' clase={styles['nested-2-level']} />
                        <Divider />

                        {/* SubCategory */}
                        <AdminMenuLink func={() => { toggleOpen(setToggleSubcategory, toggleSubcategory) }} menuIcon={<StyleIcon color='secondary' />} primaryText='Sub-categorias' mainState={adminSideBarOpen} stateCollapse={toggleSubcategory} nested nestedClass={styles.nested} />
                        <AdminCollapse state={toggleSubcategory} primaryText='subcategoria' clase={styles['nested-2-level']} />
                        {/* <Divider /> */}
                    </List>
                </Collapse>
            </List>
        </div>

    )
}

export default AdminSidebar
