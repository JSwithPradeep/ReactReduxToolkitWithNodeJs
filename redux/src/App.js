import Header from './components/header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CardDetails from './components/CardDetails';
import { Route, Routes } from 'react-router-dom';
import toast, { Toaster} from 'react-hot-toast'; 
import Success from './components/Success';
import Cancel from './components/Cancel';

function App() {
  return (
    <div className=''>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CardDetails/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/cancel' element={<Cancel/>}/>
    </Routes>
    <Toaster />
    </div>
  );
}

export default App;
