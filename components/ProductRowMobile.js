import React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { QtyBtn } from './QtyBtn';
import Image from 'next/image'
import { ccyFormat } from './ProductOrderDetails'



const ProductRowMobile = ({ product }) => {
    return (
        <Grid item xs={12}>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Grid item lg={3} md={3} xs={3}>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Grid item lg={12} md={12} xs={12}>
                            <Stack
                                divider={<Divider orientation="vertical" flexItem />}
                            >
                                <Typography variant="caption" display="block" gutterBottom>
                                    {product.short_description}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item lg={3} md={3} xs={3} style={{ textAlign: "center" }}>
                    <Typography variant="caption" display="block" gutterBottom>
                        {ccyFormat(product.price)}
                    </Typography>
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    <QtyBtn row={product} />
                </Grid>

                <Grid item xs={3} style={{ textAlign: "center" }}>
                    <Typography variant="caption" display="block" gutterBottom>
                        {ccyFormat(product.price * product.qty)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductRowMobile
