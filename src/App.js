import './App.css';
import { FaFacebook } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import Special from './content/Special';
import Section1 from './content/Section1';
import Section2 from './content/Section2';
import Footer from './content/Footer';

function App() {
  const logo = [FaFacebook, BsGlobe2, IoMdCall];
  return (
    <div>
      <img id="header" src="asserts/logo.png" alt="logo" />
      <Section1 />
      <Section2 Special={Special} />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
