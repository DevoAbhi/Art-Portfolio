import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ArtWork from './components/Artwork/ArtWork';
import Events from './components/Events/Events';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artwork' element={<ArtWork/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
      </Routes>

    </Router>
  );
}

export default App;
