import '../styles/globals.css'
import { AppProvider } from '../context'
import main from '../components/Layout'
import admin from '../components/AdminLayout'
import { useGlobalContext } from '../context'

const layouts = {
  main: main,
  admin: admin
};

var store = require('store')

const cart = store.get('cart')
const likes = store.get('likes')

if (cart) {
  const carrito = store.get('cart')
  console.log(`entre al carrito : ${carrito}`)
} else {
  console.log("setee el carrito")
  store.set('cart', [])
}

if (likes) {
  const meGusta = store.get('likes')
  console.log(`entre a likes : ${meGusta}`)
} else {
  console.log("setee los likes")
  store.set('likes', [])
}

function MyApp({ Component, pageProps }) {



  const Layout = layouts[Component.layout] || (({ children }) => <>{children}</>);

  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>)
}

export default MyApp
