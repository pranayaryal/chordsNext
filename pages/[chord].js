import { getAllChordNames, getChordData } from '../lib/chords';
import Chord from '../components/Chord';
import Menu from '../components/Menu';
import Nav from '../components/nav'
import MenuAndDetails from '../components/MenuAndDetails';


export default function Post({ details }) {
  console.log(details);

  return (
    <div>
      <Nav />
      <MenuAndDetails details={details} />
    </div>
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