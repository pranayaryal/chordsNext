import React from 'react';
import Head from 'next/head';

const Layout = ({children}) => {

  return (
    <Head>
      <title>Ukulele Chords - Pranay Aryal</title>
      { children }
    </Head>

  );

}

export default Layout;