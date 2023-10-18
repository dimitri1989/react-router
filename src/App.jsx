
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Notfound from './components/Notfound';
import Mainlayouts from './layouts/Mainlayouts';
import './App.css';

function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Mainlayouts />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
