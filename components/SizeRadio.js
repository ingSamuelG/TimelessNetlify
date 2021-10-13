import React, { useState } from 'react'
import styles from '../styles/SizeRadio.module.css'
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../context';
import { Grid } from '@mui/material';

const SizeRadio = ({ sizes }) => {
    const { sizeSelected, setSelecteSize, qtySelected, setSelecteQty, } = useGlobalContext()

    const handleValue = (value) => {
        setValue(value)
    }

    return (
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={12}>
                <Typography variant="caption" display="block" >
                    Size:
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <ul className={styles['size-list']}>
                        {sizes.map(size =>
                            <li key={`${size}-01`}>
                                <input type="radio" id={size} name="sizes" onChange={() => { setSelecteSize(size), setSelecteQty(1) }} defaultChecked={sizeSelected == size ? true : false} />
                                <label htmlFor={size}>
                                    <Typography variant="overline" display="block" gutterBottom>
                                        {size}
                                    </Typography>
                                </label>
                            </li>)
                        }
                    </ul>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default SizeRadio
