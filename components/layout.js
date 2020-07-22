import React from 'react';
import Head from 'next/head';

const Layout = ({children}) => {

  return (
    <Head>
      <title>Ukulele Chords - Pranay Aryal</title>
      <script async defer data-domain="uku-chords.netlify.app" src="https://plausible.io/js/plausible.js"></script>
    </Head>

  );

}

export default Layout;