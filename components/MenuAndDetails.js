import React, { useState } from 'react';
import Chord from './Chord'
import data from '../data'
import Menu from './Menu'

const MenuAndDetails = ({ details }) => {


  return (
    <div className="px-8 lg:px-40 bg-back-black">
      <div className="flex mt-8">
        <div className='hidden lg:block lg:mt-10 lg:w-1/6'>
          <Menu />
        </div>
        <div className="lg:ml-5">
          <p className="text-center text-menu-color xl:text-xl">Chord: {details.chord}</p>
          <div className="px-2 mt-5 flex items-center flex-wrap sm:ml-4">
            {details.details.map((chord, id) =>
              <Chord chordName={chord.name}
                key={id}
                x1={chord.x1} y1={chord.y1}
                x2={chord.x2} y2={chord.y2}
                x3={chord.x3} y3={chord.y3}
                x4={chord.x4} y4={chord.y4}
                textLower={chord.textLower}
                textUpper={chord.textUpper}

              />
            )}

          </div>

        </div>
      </div>
    </div>

  );
}

export default MenuAndDetails;
