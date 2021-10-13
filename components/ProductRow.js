import React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import { ccyFormat } from './ProductOrderDetails'



const ProductRow = ({ product }) => {
    return (
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
                    <Grid item lg={3} xs={12}>
                        <Image
                            src={`/products/${product.product_id}.png`}
                            alt={product.short_description}
                            height={75}
                            width={75}
                        // layout="fill"
                        // objectFit="contain"
                        />
                    </Grid>

                    <Grid item lg={9} md={9} xs={9}>
                        <Stack
                            divider={<Divider orientation="vertical" flexItem />}
                        >
                            <Typography variant="caption" display="block" gutterBottom>
                                {product.short_description}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                {`SKU: ${product.product_id}`}
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
                <Typography variant="caption" display="block" gutterBottom>
                    {`X ${product.qty}`}
                </Typography>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "center" }}>
                <Typography variant="caption" display="block" gutterBottom>
                    {ccyFormat(product.price * product.qty)}
                </Typography>
            </Grid>




        </Grid>
    )
}

export default ProductRow
