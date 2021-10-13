import React from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Fade from '@mui/material/Fade';


function AdminMenuLink({ func, menuIcon, mainState, primaryText, stateCollapse, nested = false, nestedClass }) {
    if (nested) {
        return <ListItem button onClick={func} >
            <ListItemIcon className={nestedClass}>
                {menuIcon}
            </ListItemIcon>
            <ListItemText primary={primaryText} />
            {stateCollapse ? <ExpandLess color='secondary' /> : <ExpandMore color='secondary' />}
        </ListItem>
    }

    return (
        <ListItem button onClick={func}>
            <ListItemIcon>
                {menuIcon}
            </ListItemIcon>
            <Fade in={!mainState} timeout={{ enter: 2500, exit: 400 }}>
                <ListItemText primary={primaryText} />
            </Fade>
            <Fade in={!mainState} timeout={2500}>
                {stateCollapse ? <ExpandLess /> : <ExpandMore />}
            </Fade>
        </ ListItem>
    )
}

export default AdminMenuLink
