import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Purchase from './components/Purchase/Purchase';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
