import React from 'react';
import Head from 'next/head';
import Nav from './nav';
import Menu from './Menu';

const Layout = ({ children, home }) => {

  return (
    <div>
      <Head>
        <title>Ukulele Chords - Pranay Aryal</title>
      </Head>
      <Nav />
      <div className="px-8 lg:px-40 bg-back-black">
        <div className="flex mt-8">
          <div className="hidden lg:block lg:mt-10 lg:w-1/6">
            <Menu />
          </div>
          <div className="lg:ml-5">
            {children}
          </div>

        </div>
      </div>
    </div>


  );

}

export default Layout;