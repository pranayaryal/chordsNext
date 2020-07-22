import { getAllChordNames, getChordData } from '../lib/chords';
import Chord from '../components/Chord';
import Menu from '../components/Menu';
import Nav from '../components/nav'
import MenuAndDetails from '../components/MenuAndDetails';
import Layout from '../components/layout';


export default function Post({ details }) {
  console.log(details);

  return (
    <Layout>
      <Nav />
      <MenuAndDetails details={details} />
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