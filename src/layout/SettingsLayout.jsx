import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AuthenticatedLayout from '../layout/AuthenticatedLayout'

const SettingsLayout = ({children}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <AuthenticatedLayout>
        <div className="content-card-bg p--24">
            <div className="setting-layout-div mb-6">
                <Link to="/settings" className={`setting-layout-link ${currentPath === "/settings" ? "active" : ""}`}>Profile</Link>
                <Link to="/settings" className={`setting-layout-link ${currentPath === "/settings/password" ? "active" : ""}`}>Password</Link>
                <Link to="/intake-setting" className={`setting-layout-link ${currentPath === "/intake-setting" ? "active" : ""}`}>Intake Setting</Link>
                <Link to="/settings" className={`setting-layout-link ${currentPath === "/settings/payment" ? "active" : ""}`}>Payment Method</Link>
            </div>
        {children}
        </div>
    </AuthenticatedLayout>
  )
}

export default SettingsLayout