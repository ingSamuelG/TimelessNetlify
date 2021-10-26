import React, { useState } from 'react'
import Link from 'next/link'
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../context';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';
import styles from '../styles/Footer.module.css'
import { borderColor } from '@mui/system';



const CssTextField = withStyles({
    root: {
        '& .MuiInputBase-root': {
            color: '#fff',
            borderColor: "#fff"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#fff',
            },
            '&:hover fieldset': {
                borderColor: '#DF1A7C',
            },
        },
        '& .MuiInputLabel-root': {
            color: "#fff",
            borderColor: "#fff"
        }
    },
})(TextField);



const Footer = () => {

    const { categories } = useGlobalContext()
    const [email, setEmail] = useState('')

    return (
        <div className={styles['footer-wrapper']} style={{ color: '#ff69b4' }}>
            <div className={styles.container}>
                <Grid container spacing={3} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item lg={4} xs={12}>
                        <Typography variant="subtitle2" display="block" style={{ color: '#DF1A7C' }} gutterBottom>
                            Shop
                        </Typography>
                        {categories.map((category) => {
                            return <Link key={category.id} href={`/category/${category.name.toLowerCase()}`} passHref>
                                <Typography variant="caption" display="block" style={{ cursor: 'pointer' }} gutterBottom>
                                    {`- ${category.name}`}
                                </Typography>
                            </Link>
                        })}
                    </Grid>
                    <Grid item lg={4} xs={12}  >
                        <Typography variant="subtitle2" display="block" style={{ color: '#DF1A7C' }} gutterBottom>
                            Ayuda
                        </Typography>
                        <Link href={`/pages/about-us`} passHref>
                            <Typography variant="caption" display="block" style={{ cursor: 'pointer' }} gutterBottom>
                                - Quienes somos
                            </Typography>
                        </Link>
                        <Link href={`/pages/contact-us`} passHref>
                            <Typography variant="caption" display="block" style={{ cursor: 'pointer' }} gutterBottom>
                                - Contacto
                            </Typography>
                        </Link>
                        <Link href={`/pages/seguimiento`} passHref>
                            <Typography variant="caption" display="block" style={{ cursor: 'pointer' }} gutterBottom>
                                - Envio
                            </Typography>
                        </Link>
                        <Link href={`/pages/pay`} passHref>
                            <Typography variant="caption" display="block" style={{ cursor: 'pointer' }} gutterBottom>
                                - Pagos
                            </Typography>
                        </Link>
                        <Link href={`/pages/faq`} passHref>
                            <Typography variant="caption" display="block" style={{ cursor: 'pointer' }} gutterBottom>
                                - Preguntas frecuentes
                            </Typography>
                        </Link>
                    </Grid>


                    <Grid item lg={4} xs={12} style={{ textAlign: 'center' }}>
                        <Grid container spacing={1} direction="row"
                            justifyContent="center"
                            alignItems="center">

                            <Grid item xs={6}>
                                <CssTextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => { setEmail(e.target.value) }} style={{ color: '#fff' }} />
                            </Grid>

                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<SendIcon />}
                                >
                                    quiero saber
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container spacing={0} direction="row"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle2" display="block" gutterBottom>
                                            Siguenos en:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FacebookIcon fontSize='large' />
                                        <InstagramIcon fontSize='large' />
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>

    )
}

export default Footer
