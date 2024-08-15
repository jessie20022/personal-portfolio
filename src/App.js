import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navigationBar';
import {Banner} from './components/banner'
import {Experience} from './components/experience';
import {Avocations} from './components/avocations';
import {Contact} from './components/contact';
import {Blog} from './components/blog';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <Blog />
      <Avocations />
      <Contact />
    </div>
  );
}

export default App;
