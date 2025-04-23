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
import Payment from './pages/Settings/Payments/Payment';
import Archieve from './pages/Archive/Index';
import LienResolution from './pages/LienResolution/Index';
import CaseDashboard from './pages/LienResolution/CaseDashboard';
import CreateDocumentPage from './pages/Settings/Documents/CreateDocumentPage';
import MyDocuments from './pages/Settings/Documents/MyDocuments';
import SignDocumentPage from './pages/Settings/Documents/SignDocumentPage';
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
        <Route path="/cases-detail/:id" element={<CaseDetailPage />} />
        <Route path="/providers" element={<ProviderPage />} />
        <Route path="/settings/profile" element={<UserProfile />} />
        <Route path="/settings/password" element={<UpdatePassword />} />
        <Route path="/settings/intake-setting" element={<IntakeSetting />} />
        <Route path="/settings/payment" element={<Payment />} />
        <Route path="/settings/create-documents" element={<CreateDocumentPage />} />
        <Route path="/settings/sign-documents" element={<SignDocumentPage />} />
        <Route path="/settings/my-documents" element={<MyDocuments />} />
        

        <Route path="/archive" element={<Archieve />} />
        <Route path="/lien-resolution" element={<LienResolution />} />
        <Route path="/case-dashboard" element={<CaseDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
