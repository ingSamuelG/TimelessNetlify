import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import AddressCard from './AddressCard'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import styles from "../styles/AddressContainer.module.css"
import Divider from '@mui/material/Divider';

export default function UserAddressCard({ address, index }) {

    const [showForm, setShowForm] = useState(false)

    return (
        <Grid key={address.id} item lg={4} xs={12}>
            <div className={styles.card}>
                <Grid container direction="row"
                    spacing={5}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="overline" display="block" gutterBottom>
                            {`Dirección ${index + 1}:`}
                        </Typography>
                    </Grid>

                    <Grid item>

                        {showForm ? (<IconButton aria-label="edit" onClick={() => {
                            setShowForm(false)
                        }}>
                            <EditOffIcon />
                        </IconButton>) : (<IconButton aria-label="edit" onClick={() => {
                            setShowForm(true)
                        }}>
                            <EditIcon color="secondary" />
                        </IconButton>)}

                    </Grid>

                </Grid>

                <Divider />
                <AddressCard address={address} formVisible={showForm} />
            </div>
        </Grid>
    )
}
