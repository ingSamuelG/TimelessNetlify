import React from 'react'
import Grid from '@mui/material/Grid';

const FilterSubmenu = ({ data, children }) => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            style={{ marginTop: "10px" }}
        >

            {data.map((item) => {
                return <Grid key={item.id ? `${item.id}-${item.name}` : `${item}`} item lg={4} xs={6} style={{ textAlign: 'center' }}>
                    {React.cloneElement(children, { data: item })}
                </Grid>
            })}


        </Grid>

    )
}

export default FilterSubmenu
