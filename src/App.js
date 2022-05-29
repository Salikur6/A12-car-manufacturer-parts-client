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
import MyOrder from './components/Dashboard/MyOrder';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import Payment from './components/Payment/Payment';
import Blogs from './components/Blogs/Blogs';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import AllUser from './components/Dashboard/AllUser';
import PrivetAdmin from './components/Privet/PrivetAdmin';
import NotFound from './components/NotFound/NotFound';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import AddProduct from './components/Dashboard/AddProduct';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'


function App() {



  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/purchase/:id' element={
          <PrivetRoute>
            <Purchase></Purchase>
          </PrivetRoute>
        }></Route>

        <Route path='/payment/:id' element={
          <PrivetRoute>
            <Payment></Payment>
          </PrivetRoute>
        }></Route>

        <Route path='/dashboard' element={
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='alluser' element={<PrivetAdmin><AllUser></AllUser></PrivetAdmin>}></Route>
          <Route path='manageallorders' element={<PrivetAdmin><ManageAllOrders></ManageAllOrders></PrivetAdmin>}></Route>
          <Route path='addproduct' element={<PrivetAdmin><AddProduct></AddProduct></PrivetAdmin>}></Route>

        </Route>

        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
