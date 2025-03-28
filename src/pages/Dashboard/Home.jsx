import React from 'react'
import AuthenticatedLayout from '../../layout/AuthenticatedLayout'
import { Icons } from '../../components/svg/Icons'

const Home = () => {
  return (
    <AuthenticatedLayout>
      <div className='flex justify-between items-center gap-2'>
        <p className='fs-20 fw-600 text-blue-39'>Pre-vetted Cases</p>
        <div className="flex items-center gap-1.5">
          <p className='fs-14 fw-400 text-gray-54'>Home</p>
          <Icons.ArrowRightIcon />
          <p className='fs-14 fw-400 text-blue-39'>Pre-vetted Cases</p>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div className="content-card-bg flex flex-col items-start relative mt-6">
      <div className="cases-tabs-container">
        <div className="inline-flex items-start gap-1 p-0.5 relative flex-[0_0_auto] bg-[#f2f3f6] rounded-lg">
          <div className="inline-flex h-10 items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] bg-white rounded-md shadow-[0px_1px_2px_#1018280d]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#0f1728] text-sm tracking-[0] leading-5 whitespace-nowrap">
              New Cases
            </div>

            <div className="mt-[-1.00px] mb-[-1.00px] bg-[#ecf3ff] inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] rounded-[999px]">
              <div className="relative w-fit mt-[-1.00px] font-medium text-[#465fff] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                23
              </div>
            </div>
          </div>

          <div className="inline-flex h-10 items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-md">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#667084] text-sm tracking-[0] leading-5 whitespace-nowrap">
              Archived
            </div>

            <div className="mt-[-1.00px] mb-[-1.00px] bg-white inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] rounded-[999px]">
              <div className="relative w-fit mt-[-1.00px] font-medium text-[#667084] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper-div">
        <div className="contact-list-main-div">
          <div className="flex flex-col w-[264px] items-start gap-1.5 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg overflow-hidden border border-solid border-[#cfd4dc] shadow-[0px_1px_2px_#1018280d]">
                <div className="flex items-center gap-2 relative flex-1 grow">
                  <div className="relative w-5 h-5">
                    <img
                      className="absolute w-[17px] h-[17px] top-0.5 left-0.5"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-3.svg"
                    />
                  </div>

                  <input
                    className="relative flex-1 mt-[-1.00px] font-normal text-[#98a1b2] text-sm leading-5 [font-family:'Outfit',Helvetica] tracking-[0] [background:transparent] border-[none] p-0"
                    placeholder="Search..."
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[720px] gap-1 px-5 py-0 flex flex-col items-start relative self-stretch w-full">
            <div className="flex flex-col items-start gap-[50px] p-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-12 h-12 bg-[#fdf1f9] rounded-[28px] overflow-hidden">
                  <div className="absolute top-3.5 left-[17px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#dc2590] text-[length:var(--text-xs-semibold-font-size)] text-center tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    KF
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-[number:var(--text-sm-medium-font-weight)] text-[#344053] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)]">
                    Kierra Franci
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-[50px] p-3 flex-[0_0_auto] bg-[#f2f3f6] rounded-lg flex flex-col items-start relative self-stretch w-full">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="bg-white relative w-12 h-12 rounded-[28px] overflow-hidden">
                  <div className="absolute top-3.5 left-[21px] font-[number:var(--text-xs-semibold-font-weight)] text-[#344053] text-[length:var(--text-xs-semibold-font-size)] text-center leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap font-text-xs-semibold tracking-[var(--text-xs-semibold-letter-spacing)] [font-style:var(--text-xs-semibold-font-style)]">
                    ?
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-[number:var(--text-sm-medium-font-weight)] text-[#1d2838] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)]">
                    +1 (603) 555-0123
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[50px] p-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="bg-[#fff5ed] relative w-12 h-12 rounded-[28px] overflow-hidden">
                  <div className="absolute top-3.5 left-4 font-[number:var(--text-xs-semibold-font-weight)] text-[#ec4909] text-[length:var(--text-xs-semibold-font-size)] text-center leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap font-text-xs-semibold tracking-[var(--text-xs-semibold-letter-spacing)] [font-style:var(--text-xs-semibold-font-style)]">
                    CP
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-[number:var(--text-sm-medium-font-weight)] text-[#344053] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)]">
                    Chance Philips
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[50px] p-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="bg-[#ebfdf2] relative w-12 h-12 rounded-[28px] overflow-hidden">
                  <div className="absolute top-3.5 left-4 font-[number:var(--text-xs-semibold-font-weight)] text-[#039754] text-[length:var(--text-xs-semibold-font-size)] text-center leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap font-text-xs-semibold tracking-[var(--text-xs-semibold-letter-spacing)] [font-style:var(--text-xs-semibold-font-style)]">
                    TG
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-[number:var(--text-sm-medium-font-weight)] text-[#344053] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)]">
                    Terry Geidt
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[50px] p-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-12 h-12 bg-[#fdf1f9] rounded-[28px] overflow-hidden">
                  <div className="absolute top-3.5 left-[17px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#dc2590] text-[length:var(--text-xs-semibold-font-size)] text-center tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                    KF
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-[number:var(--text-sm-medium-font-weight)] text-[#344053] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)]">
                    Kierra Frances
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[50px] p-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="bg-[#ebfdf2] relative w-12 h-12 rounded-[28px] overflow-hidden">
                  <div className="absolute top-3.5 left-[18px] font-[number:var(--text-xs-semibold-font-weight)] text-[#039754] text-[length:var(--text-xs-semibold-font-size)] text-center leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap font-text-xs-semibold tracking-[var(--text-xs-semibold-letter-spacing)] [font-style:var(--text-xs-semibold-font-style)]">
                    TJ
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-[number:var(--text-sm-medium-font-weight)] text-[#344053] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)]">
                    Terry Jones
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[50px] p-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="bg-[#fff5ed] relative w-12 h-12 rounded-[28px] overflow-hidden">
                  <div className="absolute top-3.5 left-[15px] font-[number:var(--text-xs-semibold-font-weight)] text-[#ec4909] text-[length:var(--text-xs-semibold-font-size)] text-center leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap font-text-xs-semibold tracking-[var(--text-xs-semibold-letter-spacing)] [font-style:var(--text-xs-semibold-font-style)]">
                    MP
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-[number:var(--text-sm-medium-font-weight)] text-[#344053] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)]">
                    Michael Philips
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="flex flex-col w-[828px] h-[800px] items-center relative bg-white border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-[#e4e7ec]">
            <div className="flex h-16 items-center gap-4 px-6 py-5 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#e4e7ec]">
              <div className="relative w-5 h-5 bg-[#98a1b2] rounded-[10px]" />

              <div className="flex flex-col items-start gap-1 relative flex-1 grow mt-[-11.00px] mb-[-11.00px]">
                <div className="self-stretch font-medium text-[#1d2838] text-base leading-6 relative mt-[-1.00px] [font-family:'Outfit',Helvetica] tracking-[0]">
                  +1 (603) 555-0123
                </div>

                <div className="flex items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="w-fit font-[number:var(--text-xs-regular-font-weight)] text-[#667084] text-[length:var(--text-xs-regular-font-size)] leading-[var(--text-xs-regular-line-height)] whitespace-nowrap relative mt-[-1.00px] font-text-xs-regular tracking-[var(--text-xs-regular-letter-spacing)] [font-style:var(--text-xs-regular-font-style)]">
                    New Client
                  </div>

                  <div className="w-fit font-[number:var(--text-xs-regular-font-weight)] text-[#465fff] text-[length:var(--text-xs-regular-font-size)] leading-[var(--text-xs-regular-line-height)] whitespace-nowrap relative mt-[-1.00px] font-text-xs-regular tracking-[var(--text-xs-regular-letter-spacing)] [font-style:var(--text-xs-regular-font-style)]">
                    Transferred Call
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-8.00px] mb-[-8.00px]">
                <div className="inline-flex items-center justify-center gap-2 p-2 relative flex-[0_0_auto] rounded-lg overflow-hidden border border-solid border-[#e4e7ec] shadow-shadow-xs">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[18px] h-[18px] top-[3px] left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-20.svg"
                    />
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-2 p-2 relative flex-[0_0_auto] rounded-lg overflow-hidden border border-solid border-[#e4e7ec] shadow-shadow-xs">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-5 h-5 top-0.5 left-0.5"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-2.svg"
                    />
                  </div>
                </div>

                <button className="all-[unset] box-border inline-flex px-4 py-2.5 bg-[#465fff] rounded-lg shadow-shadow-xs items-center justify-center gap-2 relative flex-[0_0_auto] overflow-hidden border-0 border-none">
                  <div className="relative w-fit font-medium text-white text-sm leading-5 whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                    Accept
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col h-[688px] items-start gap-6 p-6 relative self-stretch w-full bg-white overflow-hidden overflow-y-scroll">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#1d2838] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)]">
                    Intake
                  </div>
                </div>

                <div className="flex w-24 items-center justify-between relative">
                  <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                    <div className="flex p-2.5 self-stretch w-full bg-white rounded-lg items-center justify-center gap-2 relative flex-[0_0_auto] overflow-hidden border-0 border-none">
                      <div className="relative w-5 h-5">
                        <img
                          className="absolute w-[15px] h-[15px] top-[3px] left-[3px]"
                          alt="Icon"
                          src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-14.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex p-2.5 bg-[#ecf3ff] rounded-[999px] items-center justify-center gap-2 relative flex-[0_0_auto] overflow-hidden border-0 border-none">
                    <div className="relative w-5 h-5">
                      <img
                        className="absolute w-3 h-3 top-1 left-1"
                        alt="Icon"
                        src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-col items-start gap-3 flex relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-5 p-5 self-stretch w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                      <Icons.ArrowRightIcon />
                      <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#1d2838] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                        What is your first name?
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] bg-[#fff9eb] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#db6803] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                      Pending
                    </div>
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-[17px] top-[3px] left-[5px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-1.svg"
                    />
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-5 top-0.5 left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon.svg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 self-stretch w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                      <Icons.ArrowRightIcon />
                      <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#1d2838] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                        What is your last name?
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] bg-[#fff9eb] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#db6803] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                      Pending
                    </div>
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-[17px] top-[3px] left-[5px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-1.svg"
                    />
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-5 top-0.5 left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon.svg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 self-stretch w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                      <Icons.ArrowRightIcon />
                      <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#1d2838] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                        What is your phone number?
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] bg-[#fff9eb] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#db6803] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                      Pending
                    </div>
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-[17px] top-[3px] left-[5px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-1.svg"
                    />
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-5 top-0.5 left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon.svg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 self-stretch w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                      {/* <ArrowRight1 className="!relative !w-6 !h-6" /> */}
                      <Icons.ArrowRightIcon />
                      <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#1d2838] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                        Do you have health Insurance?
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] bg-[#fff9eb] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#db6803] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                      Pending
                    </div>
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-[17px] top-[3px] left-[5px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-1.svg"
                    />
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-5 top-0.5 left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon.svg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 self-stretch w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <Icons.ArrowRightIcon />
                      <div className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#1d2838] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                        How old are you?
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] bg-[#fff9eb] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#db6803] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                      Pending
                    </div>
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-[17px] top-[3px] left-[5px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-1.svg"
                    />
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-5 top-0.5 left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon.svg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 self-stretch w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <Icons.ArrowRightIcon />
                      <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#1d2838] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                        How bad is your car damaged ?
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] bg-[#fff9eb] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#db6803] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                      Pending
                    </div>
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-[17px] top-[3px] left-[5px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-1.svg"
                    />
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-5 top-0.5 left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon.svg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 self-stretch w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <Icons.ArrowRightIcon />
                      <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#1d2838] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                        What are your injuries ?
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] bg-[#fff9eb] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#db6803] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                      Pending
                    </div>
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-[17px] top-[3px] left-[5px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-1.svg"
                    />
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-5 top-0.5 left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon.svg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 self-stretch w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <Icons.ArrowRightIcon />
                      <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#1d2838] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                        Do you know that the person that hit your car has
                        insurance?
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] bg-[#fff9eb] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#db6803] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                      Pending
                    </div>
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-[17px] top-[3px] left-[5px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-1.svg"
                    />
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-5 top-0.5 left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon.svg"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 self-stretch w-full bg-white rounded-xl border border-solid border-[#e4e7ec] shadow-shadows-shadow-sm relative flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative flex-1 grow">
                    <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <Icons.ArrowRightIcon />
                      <div className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#1d2838] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
                        Any Addition Information?
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#ebfdf2] inline-flex items-center justify-center px-2 py-0.5 relative flex-[0_0_auto] rounded-[999px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-[#039754] text-xs text-center leading-[18px] whitespace-nowrap [font-family:'Outfit',Helvetica] tracking-[0]">
                      Completed
                    </div>
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-[17px] top-[3px] left-[5px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon-1.svg"
                    />
                  </div>

                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[17px] h-5 top-0.5 left-[3px]"
                      alt="Icon"
                      src="https://c.animaapp.com/m8ta5gibWvtvPM/img/icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* ----------------------------------------------------------------------------- */}
    </AuthenticatedLayout>
  )
}

export default Home