import { getAllChordNames, getChordData } from '../lib/chords';
import Chord from '../components/Chord';
import Menu from '../components/Menu';
import Nav from '../components/nav'
import MenuAndDetails from '../components/MenuAndDetails';
import Layout from '../components/layout';


const Post = ({ details }) => {

  return (
    <Layout>

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
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllChordNames();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const details = getChordData(params.chord)
  return {
    props: {
      details
    }
  }

}

export default Post;