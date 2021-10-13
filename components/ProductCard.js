import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import styles from '../styles/ProductCard.module.css'
import SizeCard from './SizeCard';


const ProductCard = ({ product }) => {
    const [toggleImg, setToggleImg] = useState(true)



    const handleChangeImage = () => {
        setToggleImg(!toggleImg)
    }

    return (
        // <Link href={`/product/${product.slug}`} >
        <div className={styles.wrapper}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center">

                <Grid item xs={12} onMouseOver={handleChangeImage} onMouseOut={handleChangeImage}>
                    <Grid container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center">

                        <Grid item xs={12}>
                            <div className={styles['like-container']} >
                                <IconButton aria-label="Like" color='secondary' size="small">
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{ height: '420px', width: '400px', backgroundImage: toggleImg ? `url(${product.images[0].src})` : `url(${product.images[1].src})`, backgroundSize: '100% 100%' }}>

                    </div>


                    {/* {toggleImg ? (<Image
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        height={420}
                        width={400}
                    // layout="fill"
                    // objectFit="contain"
                    />) : (<Image
                        src={product.images[1].src}
                        alt={product.images[0].alt}
                        height={420}
                        width={400}
                        // layout="fill"
                        objectFit="contain"
                    />)} */}
                </Grid>

                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2" display="block" gutterBottom>
                        {product.brand.name}
                    </Typography>
                    <Typography variant="caption" display="block">
                        {product.short_description.toLowerCase()}
                    </Typography>
                </Grid>

                {/* <Grid item xs={12}>
                    <SizeCard entries={product.entry} />
                </Grid> */}
                {/* 
                <Grid item xs={12}>
                    <Typography variant="caption" display="inline" >
                        {`Discount: `}
                    </Typography>

                    <Typography variant="caption" display="inline" style={{ color: '#4E9B47' }}>
                        {(product.discount * 100).toFixed(0)}%
                    </Typography>
                </Grid> */}

                <Grid item xs={12}>
                    <Typography variant="caption" display="inline" style={{ textDecoration: 'line-through' }}>
                        ${product.real_price}
                    </Typography>
                    <Typography variant="caption" display="inline">
                        {`  -  `}
                    </Typography>
                    <Typography variant="subtitle1" display="inline" color='secondary' >
                        ${product.discount_price}
                    </Typography>
                </Grid>

            </Grid>

        </div>
        // </Link >

    )
}

export default ProductCard
