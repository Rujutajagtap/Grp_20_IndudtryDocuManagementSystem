import React from 'react';
import logo from './logo.svg';

import './App.css';
import {BrowserRouter as Router, Route, Switch,Routes} from 'react-router-dom';
import EmployeeAttendance from './components/EmployeeAttendance';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeAttendanceComponent from './components/CreateEmployeeAttendanceComponent';
import UpdateEmployeeAttendanceComponent from './components/UpdateEmployeeAttendanceComponent';
import ViewEmployeeAttendanceComponent from './components/ViewEmployeeAttendanceComponent';
import EmployeeAttendanceService from './components/EmployeeAttendanceService';
function App() {
  return (
    <div>
    
      <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact component = {EmployeeAttendance}></Route>
                          <Route path = "/attendance" component = {EmployeeAttendance}></Route>
                          <Route path = "/add-attendance/:id" component = {CreateEmployeeAttendanceComponent}></Route>
                          <Route path = "/view-attendance/:id" component = {ViewEmployeeAttendanceComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeAttendanceComponent}></Route>
                    </Routes>
                </div>
              <FooterComponent />
        </Router> 
        <EmployeeAttendance/>
    </div>
    
  );
}

export default App;