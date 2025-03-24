import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../components/svg/Icons'
import logo from '../assets/logo.svg'

const Sidebar = () => {
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
              <Link to="/pre-vetted-cases" className="w-full">
                <div className="sidebar-text relative self-stretch w-full flex-[0_0_auto] bg-[#ecf3ff] rounded-lg hover:bg-[#ECF3FF] group transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 relative flex-1 grow">
                        <div>
                            <Icons.PreVettedCasesIcon />
                        </div> 
                    <div className="text">
                      Pre-vetted Cases
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/ongoing-cases" className="w-full">
                <div className="sidebar-text relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg hover:bg-[#ECF3FF] group transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 relative flex-1 grow">
                    <div>
                        <Icons.OngoingCasesIcon />
                    </div>
                    <div className="text">
                      Ongoing Cases
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/lien-resolution" className="w-full">
                <div className="sidebar-text relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg hover:bg-[#ECF3FF] group transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 relative flex-1 grow">
                    <div>
                        <Icons.LienResolutionIcon />
                    </div>
                    <div className="text">
                      Lien Resolution
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/archive" className="w-full">
                <div className="sidebar-text relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg hover:bg-[#ECF3FF] group transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 relative flex-1 grow">
                    <div>
                        <Icons.ArchiveIcon />
                    </div>
                    <div className="text">
                      Archive
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/providers" className="w-full">
                <div className="sidebar-text relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg hover:bg-[#ECF3FF] group transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 relative flex-1 grow">
                    <div>
                        <Icons.ProviderIcon />
                    </div>
                    <div className="text">
                      Providers
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Outfit',Helvetica] font-normal text-[#98a1b2] text-xs tracking-[0] leading-5">
              USER OPTIONS
            </div>

            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <Link to="/settings" className="w-full">
                <div className="sidebar-text relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg hover:bg-[#ECF3FF] group transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 relative flex-1 grow">
                    <div>
                        <Icons.SettingsIcon />
                    </div>
                    <div className="text">
                      Settings
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/logout" className="w-full">
                <div className="sidebar-text relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg hover:bg-[#ECF3FF] group transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 relative flex-1 grow">
                    <div>
                        <Icons.LogoutIcon />
                    </div>
                    <div className="text logout">
                      Logout
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Sidebar