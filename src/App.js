import logo from './logo.svg';
import './App.css';
import Hearder from './component/Hearder';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import Browse from './pages/browse';
import Episodes from './pages/episodes';
 ///bg-gradient-to-r from-indigo-400 via-purple-500 to-purple-700
 //145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%
function App() {
  return (
    <div className=' bg-[radial-gradient(circle,#22223b,#6930c3,#22223b)] max-w-full min-h-screen p-10'>
      <div className='max-w-7xl mx-auto'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/episodes" element={<Episodes/>}/>
        </Routes>
    </div>
    </div>
    
  );
}

export default App;
