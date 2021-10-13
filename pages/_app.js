import '../styles/globals.css'
import { AppProvider } from '../context'
import main from '../components/Layout'
import admin from '../components/AdminLayout'

const layouts = {
  main: main,
  admin: admin
};

var store = require('store')

const cart = store.get('cart')

if (cart) {
  const carrito = store.get('cart')
  console.log(`entre al carrito : ${carrito}`)
} else {
  console.log("setee el carrito")
  store.set('cart', [])

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
