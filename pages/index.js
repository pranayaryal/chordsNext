import Nav from '../components/nav'
import MenuAndDetails from '../components/MenuAndDetails';
import { getChordData } from '../lib/chords';
import Menu from '../components/Menu';
import ReactGA from 'react-ga'
import Layout from '../components/layout';
import Chord from '../components/Chord';


export default function IndexPage() {

  console.log('you arein index');

  const defaultData = getChordData('A');
  return (
    <Layout home>

      <p className="text-center text-menu-color xl:text-xl">Chord: A</p>
      <div className="px-2 mt-5 flex items-center flex-wrap sm:ml-4">
        {defaultData.details.map((chord, id) =>
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
    </Layout>
  )
}
