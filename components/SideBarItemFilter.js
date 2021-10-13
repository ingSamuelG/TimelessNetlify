import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const SideBarItemFilter = ({ name, children }) => {

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
            <ListItem  >
                <ListItemText disableTypography primary={<Typography variant="overline" gutterBottom>
                    {name}
                </Typography>} />
                <IconButton aria-label="expand" onClick={handleClick}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    )
}

export default SideBarItemFilter
