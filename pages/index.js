import Nav from '../components/nav'
import MenuAndDetails from '../components/MenuAndDetails';
import { getChordData } from '../lib/chords';
import Menu from '../components/Menu';


export default function IndexPage() {

  const defaultData = getChordData('A');
  return (
    <div className="bg-back-black">
      <Nav />
      <MenuAndDetails details={defaultData} />
    </div>
  )
}
