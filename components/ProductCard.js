import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalContext } from '../context';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import styles from '../styles/ProductCard.module.css';
import Tooltip from '@mui/material/Tooltip';
import SizeCard from './SizeCard';


const ProductCard = ({ product }) => {
    const { myLikes, addToLikes } = useGlobalContext()
    const [toggleImg, setToggleImg] = useState(true)

    const store = require('store')
    let localLikes = store.get('likes')

    const productOnMyLikes = localLikes.find(pro => pro.id === product.id)



    const handleChangeImage = () => {
        setToggleImg(!toggleImg)
    }

    const addToMyLikes = (product) => {
        const productOnMyLikes = localLikes.find(pro => pro.id === product.id)

        if (!productOnMyLikes) {
            store.set('likes', [...localLikes, product])
            let newLikes = store.get('likes')
            addToLikes(newLikes)
        } else {
            const productsWoLiked = localLikes.filter(pro => pro.id !== product.id)
            store.set('likes', productsWoLiked)
            addToLikes(productsWoLiked)

        }

    }


    return (
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
                                <Tooltip title={productOnMyLikes ? "No me gusta" : "Me gusta"} placement="right-start">
                                    <IconButton aria-label="Like" color='secondary' size="small" onClick={() => {
                                        addToMyLikes(product)
                                    }}>
                                        {productOnMyLikes ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}
                                    </IconButton>
                                </Tooltip>
                            </div>

                        </Grid>
                    </Grid>

                    <Link href="/product/[name]" as={`/product/${product.short_description}`} passHref>
                        <div className={styles.images} style={{ backgroundImage: toggleImg ? `url(${product.images[0].src})` : `url(${product.images[1].src})`, backgroundSize: '100% 100%' }}>
                        </div>
                    </Link>

                </Grid>

                <Link href="/product/[name]" as={`/product/${product.short_description}`} passHref>
                    <>
                        <Grid item xs={12} className={styles['title-container']}>
                            <Typography variant="subtitle2" display="block" gutterBottom>
                                {product.brand.name}
                            </Typography>
                            <Typography variant="caption" display="block">
                                {product.short_description.toLowerCase()}
                            </Typography>
                        </Grid>

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
                    </>
                </Link >
            </Grid>

        </div >


    )
}

export default ProductCard
