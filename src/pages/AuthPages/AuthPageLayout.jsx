import React from 'react'
import { Icons } from '../../components/svg/Icons'


const AuthPageLayout = ({children, fullHeight}) => {



  return (
    <div className="pt--70">
      <div className='container-auth'>
         <a href="/" className='flex items-center gap-1'>
            <Icons.BackIcon />
            <p className='text-gray-54 fs-14'>Back</p>
         </a>
         <div className={`auth-layout ${fullHeight ? 'h-100' : 'h-screen-100'}`}>
          {children}
         </div>
      </div>
    </div>
  )
}

export default AuthPageLayout