import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/AuthPages/SignIn'
import ForgotPassword from './pages/AuthPages/ForgotPassword'
import SignUp from './pages/AuthPages/SignUp'
import PersonalInfo from './pages/AuthPages/PersonalInfo'
import OTPVerfication from './pages/AuthPages/OTPVerfication'
import Home from './pages/Dashboard/Home'
import OngoingCases from './pages/OngoingCases/Index'
import CaseDetailPage from './pages/OngoingCases/CaseDetailPage';
import 'react-phone-input-2/lib/style.css'
import ProviderPage from './pages/Providers/ProviderPage';
import UserProfile from './pages/Settings/Profile/UserProfile';
import IntakeSetting from './pages/Settings/Preferences/IntakeSetting';
import UpdatePassword from './pages/Settings/Password/UpdatePassword';
 
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
        <Route path="/ongoing-cases" element={<OngoingCases />} />
        <Route path="/cases-detail" element={<CaseDetailPage />} />
        <Route path="/providers" element={<ProviderPage />} />
        <Route path="/settings/profile" element={<UserProfile />} />
        <Route path="/settings/password" element={<UpdatePassword />} />
        <Route path="/settings/intake-setting" element={<IntakeSetting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
