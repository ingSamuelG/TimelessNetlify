import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from '../components/NavBarSlider'
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../context'
import ProductContainer from '../components/ProductContainer'

export default function Home({ data }) {
  const { setSubmenuClosed, products } = useGlobalContext()

  const recetas = data.cat

  return (
    <div className={styles.wrapper}>
      <Grid container direction="row" justifyContent="center"
        alignItems="center" >

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Slider />
        </Grid>
        <Grid item xs={12}>
          <div className={styles.separetor}></div>
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={products.filter(product => product.category.name === 'Ropa')} />
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={products.filter(product => product.category.name === 'Zapatos')} />
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={products.filter(product => product.category.name === 'Accesorios')} />
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={products.filter(product => product.category.name === 'Bolsa')} />
        </Grid>
      </Grid>
    </div>

  )
}

Home.layout = 'main'

export function getStaticProps() {
  return {
    props: {
      data: {
        cat: [{ titulo: "Smothie de pina" }]
      }
    }
  }
}