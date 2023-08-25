import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import Home from './components/Home';
import CardDetails from './components/CardDetails';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Headers />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='cart' element={<CardDetails />} />
    </Routes>
    
    </>
  );
}

export default App;
