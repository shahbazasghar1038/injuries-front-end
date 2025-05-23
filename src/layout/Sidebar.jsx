import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icons } from '../components/svg/Icons'
import logo from '../assets/logo.svg'
import { clearAuthData } from '../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { pathname } = location;
  const user = useSelector((state) => state.auth.user);
  const isDoctor = user?.role === 'Doctor'; // Check if the user is a doctor
console.log('user :' , user)
  const menuItems = [
    // Only include Intake if user is not a doctor
    ...(!isDoctor
      ? [{ path: '/home', label: 'Intake', icon: <Icons.PreVettedCasesIcon /> }]
      : []),
  
    { path: '/ongoing-cases', label: isDoctor ? 'Cases' : 'Ongoing Cases', icon: <Icons.OngoingCasesIcon /> },
    { path: '/lien-resolution', label: isDoctor ? 'Post Treatment' : 'Lien Resolution', icon: isDoctor ? <Icons.PostTreatmentIcon/> : <Icons.LienResolutionIcon /> },
    { path: '/archive', label: 'Archive', icon: <Icons.ArchiveIcon /> },
    { path: '/providers', label: 'Providers', icon: <Icons.ProviderIcon /> },
  ];
  
  // User options navigation items
  const userOptions = [
    {
      path: "/settings/profile",
      label: "Settings",
      icon: <Icons.SettingsIcon />,
    },
    {
      label: "Logout", // 🔥 Don't set path for Logout
      icon: <Icons.LogoutIcon />,
      className: "logout",
      onClick: () => {
        console.log("Logout clicked");
        dispatch(clearAuthData());
        console.log("Auth data cleared");
      },
    },
  ];
  

  // Render navigation link
  const renderNavLink = (item) => {
    // Log the current pathname for debugging
    
    // More generic approach to check if pathname starts with item path
    // or if it's related to ongoing cases
    let isActive = pathname === item.path;
    
    // Special case for ongoing cases
    if (item.path === '/ongoing-cases') {
      // Check if the current path is related to ongoing cases
      // by checking if it starts with /ongoing-cases or contains case-detail
      // but exclude case-dashboard path
      isActive = isActive || 
                 pathname.startsWith('/ongoing-cases') || 
                 pathname.startsWith('/case-detail') ||  
                 (pathname.includes('case') && !pathname.includes('case-dashboard')) ||
                 pathname.includes('/cases/');
      
    }
    
    // Special case for Lien Resolution
    if (item.path === '/lien-resolution') {
      // Check if the current path includes case-dashboard
      isActive = isActive  || pathname.startsWith('/lien-resolution-detail') || pathname.includes('case-dashboard') ;
      
    }
    
    // Special case for settings
    if (item.path === '/settings/profile') {
      // Check if the current path is related to any settings routes
      isActive = isActive || 
                 pathname.startsWith('/settings/');
      
    }

    return (
      <Link to={item.path} className="w-full" key={item.path}>
        <div className={`sidebar-text ${isActive ? 'active' : ''} relative self-stretch w-full flex-[0_0_auto] rounded-lg hover:bg-[#ECF3FF] group transition-colors cursor-pointer ${isActive ? 'bg-[#ecf3ff]' : 'bg-white'}`}>
          <div className="flex items-center gap-3 relative flex-1 grow">
            <div className={`text-inherit group-hover:text-[#465FFF] ${isActive ? 'text-[#465FFF]' : ''}`}>
              {item.icon}
            </div>
            <div className={`text ${item.className || ''} group-hover:text-[#465FFF] ${isActive ? 'text-[#465FFF]' : ''}`}>
              {item.label}
            </div>
          </div>
        </div>
      </Link>
    );
  };



  const renderNavLink2 = (option) => {
    // Add active class for settings
    let isActive = false;
    if (option.path === "/settings/profile") {
      isActive = pathname.startsWith("/settings/");
    }

    if (option.onClick) {
      return (
        <button
          key={option.label}
          onClick={option.onClick}
          className={`flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-gray-100 text-left ${option.className || ''}`}
        >
          <div className={`group-hover:text-[#465FFF] ${isActive ? 'text-[#465FFF]' : ''}`}>
            {option.icon}
          </div>
          <span>{option.label}</span>
        </button>
      );
    }

    return (
      <Link
        key={option.label}
        to={option.path}
        className={`flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-[#ecf3ff] text-[#465FFF]' : ''}`}
      >
        <span className={`group-hover:text-[#465FFF] ${isActive ? 'text-[#465FFF]' : ''}`}>
          {option.icon}
        </span>
        <span>{option.label}</span>
      </Link>
    );
  };
  
  
  return (
    <>
      {/* Overlay that appears when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-10 lg:hidden"
          onClick={onClose}
        />
      )}
      <div className={`sidebar flex flex-col md:w-[260px] w-[260px] h-[1024px] items-start gap-7 pt-8 pb-5 px-5 fixed lg:relative z-20 transition-all duration-300 bg-white border-r [border-right-style:solid] border-[#e4e7ec] ${isOpen ? 'left-0' : '-left-[260px] lg:left-0'}`}>
        <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex justify-between items-center w-full">
            <img
              className="relative w-[169px] h-[23.94px]"
              alt="Frame"
              src={logo}
            />
          </div>

          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Outfit',Helvetica] font-normal text-[#98a1b2] text-xs tracking-[0] leading-5">
                MENU
              </div>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                {menuItems.map(renderNavLink)}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Outfit',Helvetica] font-normal text-[#98a1b2] text-xs tracking-[0] leading-5">
                USER OPTIONS
              </div>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
    {userOptions.map(renderNavLink2)}
  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar