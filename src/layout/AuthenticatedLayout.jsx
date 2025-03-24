import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const AuthenticatedLayout = ({ children }) => {
  return (
    <div className='layout-flex'>
        <Sidebar />

        <div className="layout-padding w-full">
            <Header />

            <div className="content-wrapper content-padding">
                {children}
            </div>
        </div>
    </div>
  )
}

export default AuthenticatedLayout