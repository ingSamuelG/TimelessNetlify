import React, { useState } from 'react'
import styles from '../../styles/User.module.css'
import UserMenu from '../../components/UserMenu';
import UserContainer from '../../components/UserContainer';
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
            <Grid container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={3}>

                <Grid item lg={3} xs={12}>
                    <UserMenu state={selectedIndex} fun={handleListItemClick} />
                </Grid>

                <Grid item lg={9} xs={12}>
                    <UserContainer menu={selectedIndex} />
                </Grid>
            </Grid>
        </div>
    )
}

Index.layout = 'main'
