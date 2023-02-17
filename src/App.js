import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import './Signup.css';
import Slider from './components/Slider';
import StockDashboard from './components/StockDashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/StockDashboard' element={<StockDashboard/>}/>
          <Route path='/slider' element={<Slider/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
