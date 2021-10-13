import React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../context'


const BrandFilterLink = ({ data }) => {
    const { setProductFilterFromBrand, brandFilterPressed } = useGlobalContext()


    return (
        <div style={{ border: '1px solid #E0E0E0', padding: "2px", borderRadius: "10px", cursor: "pointer" }} onClick={() => {
            setProductFilterFromBrand(data.id)
            brandFilterPressed({ name: data.name, state: true })
        }}>
            <Grid container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"

            >

                <Grid item xs={12} >
                    <Typography variant="caption">
                        {`${data.name}`.toLowerCase()}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Image
                        alt={`${data.name}`}
                        src={`/logos/${data.img_url}`}
                        width={60}
                        height={30}
                        quality={100}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default BrandFilterLink
