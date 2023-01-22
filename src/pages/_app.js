import { Provider } from 'react-redux';
import { store } from 'store';
import { Suspense } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/globals.scss'
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Suspense fallback={<h1>Loading...</h1>}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Suspense>
    </Provider>
  )
}

export default MyApp
