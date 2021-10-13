import React from 'react'
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import AddIcon from '@mui/icons-material/Add';
import TableViewIcon from '@mui/icons-material/TableView';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import PublishIcon from '@mui/icons-material/Publish';


function AdminCollapse({ state, clase, primaryText }) {
    return (
        <Collapse in={state} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <Link href="/admin/add/[type]" as={`/admin/add/${primaryText}`}>
                    <ListItemButton >
                        <ListItemIcon className={clase}>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Crear ${primaryText}`} />
                    </ListItemButton>
                </Link>
                <Divider />
                <Link href="/admin/add/excel/[type]" as={`/admin/add/excel/${primaryText}`}>
                    <ListItemButton>
                        <ListItemIcon className={clase}>
                            <PublishIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Subir tabla Excel ${primaryText}`} />
                    </ListItemButton>
                </ Link>
                <Divider />
                <Link href="/admin/manage/[type]" as={`/admin/manage/${primaryText}`}>
                    <ListItemButton>
                        <ListItemIcon className={clase}>
                            <TableViewIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Administrar ${primaryText}`} />
                    </ListItemButton>
                </ Link>
                <Divider />
            </List>
        </Collapse>
    )
}

export default AdminCollapse
