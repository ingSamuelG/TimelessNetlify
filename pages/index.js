import HeadTag from '../components/HeadTag';
import Image from 'next/image'
import Link from 'next/link'
import Slider from '../components/NavBarSlider'
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../context'
import ProductContainer from '../components/ProductContainer'
import axios from 'axios';

export default function Home({ data }) {
  const { setSubmenuClosed } = useGlobalContext()



  // console.log(data.products[0].category.name)
  console.log(data.products[0])

  return (
    <div className={styles.wrapper}>
      <HeadTag
        title={"La mejor tienda con marcas elegantes"}
        description={"Una tienda con las marcas mas cotizadas y elegantes a un precio accesible"}
        robotContent={["index", "follow"]}
        keywords={
          ["Tienda de ropa",
            "Tienda en internet",
            "Tienda de segunda mano",
            "tiendas en linea",
            "comprar por internet",
            "vender ropa usada",
            "ropa segunda mano",
            "paginas para comprar",
            "comprar ropa de segunda mano",
            "ropa moschino",
            "tienda online",
            "tienda online en mexico",
            "ropa fendi",
            "tienda de ropa de segunda mano",
            "ropa calzedonia",
            "mejor precio",
            "zapatos",
            "comprar zapatos",
            "comprar zapatos segunda mano",
            "zapatos segunda mano",
            "lentes",
            "comprar lentes",
            "comprar lentes segunda mano",
            "lentes segunda mano",
            "bolsas",
            "comprar bolsas",
            "comprar bolsas segunda mano",
            "bolsas segunda mano"
          ]} />
      <Grid container direction="row" justifyContent="center"
        alignItems="center" >

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Slider />
        </Grid>
        <Grid item xs={12}>
          <div className={styles.separetor}></div>
        </Grid>

        <Grid item xs={12}>
          <ProductContainer products={data.products.filter(product => product.category.name.toLowerCase() === 'ropa').splice(0, 8)} />
        </Grid>

        <Grid item xs={12}>
          <ProductContainer products={data.products.filter(product => product.category.name.toLowerCase() === 'zapatos').splice(0, 8)} />
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={data.products.filter(product => product.category.name.toLowerCase() === 'accesorios').splice(0, 8)} />
        </Grid>
        <Grid item xs={12}>
          <ProductContainer products={data.products.filter(product => product.category.name.toLowerCase() === 'bolsa').splice(0, 8)} />
        </Grid>
      </Grid>
    </div>

  )
}

Home.layout = 'main'

export async function getServerSideProps(context) {

  let myVar = {}

  try {
    const response = await axios.get('http://127.0.0.1:5000/api/v1/products/');
    myVar = response
    console.log(response)

  } catch (error) {
    console.error(error);
  }

  const data = myVar.data

  return {
    props: { data } // will be passed to the page component as props
  }
}