import React from 'react';
import { makeStyles } from '@mui/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Link from 'next/link';
import Image from 'next/image';
import SideBarItem from './SideBarItem';
import { useGlobalContext } from '../context';

const useStyles = makeStyles({
    list: {
        width: 280,

    },
    fullList: {
        width: 'auto',
    },
    nested: {
        paddingLeft: '25px'
    },

});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const { sideBarOpen, toggleSideBar, categories } = useGlobalContext()
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    const list = () => (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.list}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" disableSticky={true}>
                    <Grid container justifyContent="flex-end" alignItems="center">
                        <Grid item>
                            <IconButton aria-label="expand" size="small" className={classes.togle_btn} onClick={toggleSideBar}>
                                <ClearIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider />
                </ListSubheader>
            }
        >

            <ListItem button onClick={toggleSideBar} >
                <Link href={`/store`} passHref>
                    <ListItem>
                        <ListItemText disableTypography primary={<Typography variant="overline" gutterBottom>
                            Tienda
                        </Typography>} />
                    </ListItem>
                </Link>
                <IconButton >
                    <StorefrontIcon />
                </IconButton>
            </ListItem>

            {categories.map((category) => {
                return <SideBarItem key={category.id} category={category} />
            })}

        </List>
    );

    return (
        <div>
            <SwipeableDrawer
                anchor='left'
                open={sideBarOpen}
                onClose={toggleSideBar}
                onOpen={toggleSideBar}
                classes={{ paper: classes.list }}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}