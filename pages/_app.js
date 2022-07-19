import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducers';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { config } from '@fortawesome/fontawesome-svg-core';
import Layout from '../components/Layout';

config.autoAddCss = false;

//! Outils de développement.

import { composeWithDevTools } from 'redux-devtools-extension';

//! --------------------------------------------------

//! Fonction à jouer au démarrage.

import { readProducts } from '../src/actions/productCRUD.action';

//! --------------------------------------------------

function MyApp({ Component, pageProps }) {
  //! Le store de redux.

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  //! --------------------------------------------------

  // return <Component {...pageProps} />;

  useEffect(() => {
    store.dispatch(readProducts());
  }, [store]);

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Head>
            <title>Docaz.re</title>
            <meta name="description" content="Trouvez vos gourmandise" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
