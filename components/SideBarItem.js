import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../context';

const SideBarItem = ({ category }) => {
    const { setProductFilter, subCategoriesPressed } = useGlobalContext()

    const useStyles = makeStyles({
        nested: {
            paddingLeft: '50px'
        },

    });

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem button>
                <Link
                    href={'/categoria/[name]'}
                    as={`/categoria/${category.name.toLowerCase()}`}>
                    <ListItem>
                        <ListItemText disableTypography primary={<Typography variant="overline" gutterBottom>
                            {category.name}
                        </Typography>} />
                    </ListItem>
                </Link>
                <IconButton aria-label="expand" onClick={handleClick}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {category.subcategories.map((subcategory) => {
                        return (
                            <Link key={subcategory.id} href={'/categoria/[name]/[subcategoria]'} as={`/categoria/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}`}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <Image
                                            src={`/${subcategory.icon_url}`}
                                            alt={subcategory.name}
                                            width={100}
                                            height={100}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={subcategory.name} />
                                </ListItem>
                            </Link>)
                    })}

                </List>
            </Collapse>
        </>
    )
}

export default SideBarItem
