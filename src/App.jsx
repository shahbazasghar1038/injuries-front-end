import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/AuthPages/SignIn'
import ForgotPassword from './pages/AuthPages/ForgotPassword'
import SignUp from './pages/AuthPages/SignUp'
import PersonalInfo from './pages/AuthPages/PersonalInfo'
import OTPVerfication from './pages/AuthPages/OTPVerfication'
import Home from './pages/Dashboard/Home'
// Your components
 
const NotFound = () => <h1>404: Page Not Found</h1>;

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/otp-verification" element={<OTPVerfication />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
