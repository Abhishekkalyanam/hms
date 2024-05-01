import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home';
import ChangePassword from './changepassword';
import MyProfile1 from './myprofile1';
import BookAppointment from './bookappointment';
import PaymentGateway  from './PaymentGateway';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyProfile from './myprofile1';
import ViewReport from './viewreport';

function Website() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/viewreport' element={<ViewReport/>} />
        <Route path='/myprofile1' element={<MyProfile1/>} />
        <Route path='/bookappointment' element={<BookAppointment/>} /> {/* New route */}
        <Route path='/PaymentGateway' element={<PaymentGateway/>} /> {/* New route */}
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.render(<Website/>, document.getElementById('root'));