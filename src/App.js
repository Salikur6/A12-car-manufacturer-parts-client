import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Purchase from './components/Purchase/Purchase';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import PrivetRoute from './components/Privet/PrivetRoute';

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/purchase' element={
          <PrivetRoute>
            <Purchase></Purchase>
          </PrivetRoute>
        }></Route>

        <Route path='/dashboard' element={
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
