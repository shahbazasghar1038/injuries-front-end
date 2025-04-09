import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icons } from '../components/svg/Icons'
import logo from '../assets/logo.svg'

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  
  // Menu navigation items
  const menuItems = [
    { path: '/home', label: 'Pre-vetted Cases', icon: <Icons.PreVettedCasesIcon /> },
    { path: '/ongoing-cases', label: 'Ongoing Cases', icon: <Icons.OngoingCasesIcon /> },
    { path: '/lien-resolution', label: 'Lien Resolution', icon: <Icons.LienResolutionIcon /> },
    { path: '/archive', label: 'Archive', icon: <Icons.ArchiveIcon /> },
    { path: '/providers', label: 'Providers', icon: <Icons.ProviderIcon /> },
  ];

  // User options navigation items
  const userOptions = [
    { path: '/settings/profile', label: 'Settings', icon: <Icons.SettingsIcon /> },
    { path: '/logout', label: 'Logout', icon: <Icons.LogoutIcon />, className: 'logout' },
  ];

  // Render navigation link
  const renderNavLink = (item) => (
    <Link to={item.path} className="w-full" key={item.path}>
      <div className={`sidebar-text ${pathname === item.path ? 'active' : ''} relative self-stretch w-full flex-[0_0_auto] rounded-lg hover:bg-[#ECF3FF] group transition-colors cursor-pointer ${pathname === item.path ? 'bg-[#ecf3ff]' : 'bg-white'}`}>
        <div className="flex items-center gap-3 relative flex-1 grow">
          <div className={`text-inherit group-hover:text-[#465FFF] ${pathname === item.path ? 'text-[#465FFF]' : ''}`}>
            {item.icon}
          </div>
          <div className={`text ${item.className || ''} group-hover:text-[#465FFF] ${pathname === item.path ? 'text-[#465FFF]' : ''}`}>
            {item.label}
          </div>
        </div>
      </div>
    </Link>
  );
  
  return (
    <div className="sidebar flex flex-col w-[260px] h-[1024px] items-start gap-7 pt-8 pb-5 px-5 relative bg-white border-r [border-right-style:solid] border-[#e4e7ec]">
      <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-[169px] h-[23.94px]"
          alt="Frame"
          src={logo}
        />

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
              {userOptions.map(renderNavLink)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar