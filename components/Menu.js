import React from 'react';
import Link from 'next/link';
import data from '../data'

const Menu = props => {
  const chords = Object.keys(data);
  return (
    <div className="flex flex-col text-menu-color text-center xl:text-xl">
      {chords.map(chord =>
        <Link href={`/${chord}`} key={chord}>
        <a className="hover:bg-gray-800 mt-2 hover:text-white">{chord}</a>
        </Link>
      )}
    </div>

  );
}

export default Menu;