import Nav from '../components/nav'
import MenuAndDetails from '../components/MenuAndDetails';
import { getChordData } from '../lib/chords';
import Menu from '../components/Menu';
import ReactGA from 'react-ga'


export default function IndexPage() {

  ReactGA.initialize('UA-58522655-2')
  ReactGA.pageview(window.location.pathname + window.location.search)

  const defaultData = getChordData('A');
  return (
    <div className="bg-back-black">
      <Nav />
      <MenuAndDetails details={defaultData} />
    </div>
  )
}
