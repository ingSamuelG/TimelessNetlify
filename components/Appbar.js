import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useGlobalContext } from '../context';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SwipeableTemporaryDrawer from './SideBarDrawer';
import Submenu from '../components/SubMenu';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'



const Navbar = () => {
    const { categories, toggleSideBar, searching, toggleSearching, setSubmenuOpen, setSubmenuClosed, cartCount, setCartCount, myCart } = useGlobalContext()

    React.useEffect(() => {
        setCartCount()
    }, [myCart])


    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 900) {
                toggleSearching(true);
            } else {
                toggleSearching(false);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const displaySubmenu = (e) => {
        const page = e.target.textContent
        const tmpSpan = e.target.getBoundingClientRect()
        const scroll = window.pageYOffset
        const center = (tmpSpan.left + tmpSpan.right) / 2
        const bottom = tmpSpan.bottom + 10 + scroll
        setSubmenuOpen(page, { center, bottom })
    }



    const closeSubmenuOnNav = (e) => {
        if (e.target.classList.contains('cl-btns')) {
            setSubmenuClosed()
        }
    }


    return (
        <div className={styles.grow} onMouseOver={closeSubmenuOnNav}>
            <AppBar id="barra" elevation={1} position="fixed" style={{
                backgroundColor: '#fff',
                color: "#3d3d3d",
                zIndex: 3
            }} className={styles.var_trans}>
                <Toolbar>
                    <Grid container spacing={2} justifyContent="center"
                        alignItems="center">
                        <Grid item lg={4} xs={4} className='cl-btns'>
                            <Grid container spacing={2} justifyContent="center"
                                alignItems="center" className='cl-btns'>
                                <Grid item className={styles.logo}>
                                    <Image
                                        src="/logo_let.png"
                                        alt="Picture of the author"
                                        width={80}
                                        height={80}
                                    />
                                </Grid>

                                <Grid item className={styles.togle_btn} >
                                    <IconButton aria-label="delete" size="medium" onClick={toggleSideBar} >
                                        <MenuIcon fontSize="inherit" />
                                    </IconButton>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item lg={4} xs={4} className="nav-btns" >
                            <Grid container spacing={1} justifyContent="space-around"
                                alignItems="center" >
                                <Grid id='home' item className={styles.nav_links}>
                                    <Link href='/' >
                                        <Typography variant="overline" className={`${styles.link_btn}  cl-btns`} gutterBottom>
                                            home
                                        </Typography></Link>
                                </Grid>
                                <Grid id='store' item className={styles.nav_links}>
                                    <Link href='/store/' className={styles.link_btn}>
                                        <Typography variant="overline" className={`${styles.link_btn}  cl-btns`} gutterBottom>
                                            Store
                                        </Typography>
                                    </Link>
                                </Grid>
                                {categories.map((category) => {
                                    return (
                                        <Grid key={category.id} item className={styles.nav_links} >
                                            <Link href={`category/${category.name.toLowerCase()}`}  ><Typography id={category.name} variant="overline" className={styles.link_btn} gutterBottom onMouseOver={displaySubmenu}>
                                                {category.name}
                                            </Typography></Link>
                                        </Grid>)
                                })}
                                <Grid item className={styles.togle_btn}>
                                    <Image
                                        src="/logo_let.png"
                                        alt="Picture of the author"
                                        width={100}
                                        height={100}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item lg={4} xs={4} className='cl-btns'>
                            <Grid container spacing={1} direction="row" justifyContent="center"
                                alignItems="center" className='cl-btns' >
                                <Grid item className='cl-btns'>
                                    <IconButton aria-label="text our WhatsApp" size='small' color="inherit">
                                        <FavoriteBorderIcon color='secondary' />
                                    </IconButton>
                                </Grid>
                                <Grid item className={styles.nav_links}>
                                    <IconButton aria-label="text our WhatsApp" size='small' color="inherit" onClick={() => { toggleSearching(!searching) }} >
                                        <SearchIcon color='secondary' />
                                    </IconButton>
                                </Grid>
                                <Grid item className='cl-btns'>
                                    <Badge color="secondary" badgeContent={cartCount}>
                                        <ShoppingCartOutlinedIcon color='secondary' />
                                    </Badge>
                                </Grid>
                                <Grid item className='cl-btns'>
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-haspopup="true"
                                        color="inherit"
                                        styles={{ padding: '4px' }}
                                    >
                                        <AccountCircle color='secondary' />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
                {searching ? (<Grid container direction="row" justifyContent="center"
                    alignItems="center" className={styles.slide}>
                    <Grid item lg={4} xs={6}>
                        <TextField
                            id="standard-full-width"
                            label="Buscar"
                            style={{ margin: 8 }}
                            placeholder="Que quieres comprar ?"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>) : null}

            </AppBar>
            <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
            <Submenu  ></Submenu>
        </div >


    );
}

export default Navbar