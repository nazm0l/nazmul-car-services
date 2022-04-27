import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login'
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import Cars from './Pages/Cars/Cars';
import RequireAuth from './Pages/Login/RequreAuth/RequreAuth';
import AddCar from './Pages/AddCar/AddCar';
import ManageCars from './Pages/ManageCars/ManageCars';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/services/:id' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>
        <Route path='/addcars' element={
          <RequireAuth>
            <AddCar></AddCar>
          </RequireAuth>
        }></Route>
        <Route path='/managecars' element={
          <RequireAuth>
            <ManageCars></ManageCars>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/cars' element={<Cars></Cars>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
