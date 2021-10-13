import React from 'react'
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Link from 'next/link'
import Grid from '@mui/material/Grid';



const Sublinks = ({ category }) => {
    return (
        <Grid container spacing={2} justifyContent="space-evenly"
            alignItems="center">
            {category.subcategories.map((subcategory) => {
                return <Grid item key={`${subcategory.name}${subcategory.id}`}  >
                    <Grid container spacing={2} justifyContent="center"
                        alignItems="center">

                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <Image
                                src={`/${subcategory.icon_url}`}
                                alt={subcategory.name}
                                width={150}
                                height={150}
                            />
                        </Grid>

                        <Grid item xs={6} style={{ textAlign: 'left' }} >
                            <Typography variant="overline" gutterBottom>
                                {subcategory.name}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            })}


        </Grid>
    )
}

export default Sublinks
