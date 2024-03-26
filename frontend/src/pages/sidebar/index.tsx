import { GaugeCircle, LucideAArrowDown } from "lucide-react";




export default function Home() {


  return (
    <>
      <div 
      
       className="dagger before:content-[''] before:bg-gradient-to-b before:from-slate-100 before:to-slate-50 before:fixed before:inset-0"
      >
      
        {/* <div className="h-screen relative loading-page-hide loading-page--before-hide [&.loading-page--before-hide]:before:block [&.loading-page--hide]:before:opacity-0 before:content-[''] before:transition-opacity before:duration-300 before:hidden before:inset-0 before:h-screen before:w-screen before:fixed before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:z-[60] [&.loading-page--before-hide]:after:block [&.loading-page--hide]:after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:hidden after:h-16 after:w-16 after:animate-pulse after:fixed after:opacity-50 after:inset-0 after:m-auto after:bg-loading-puff after:bg-cover after:z-[61]"> */}
          <div className="fixed top-0 left-0 z-50 h-screen side-menu group side-menu--collapsed">
            <div className="box fixed inset-x-0 top-0 z-10 flex h-[65px] rounded-none border-x-0 border-t-0"></div>
            <div className="side-menu__content absolute inset-y-0 z-10 xl:top-[65px] xl:z-0">
              <div className="box xl:ml-0 border-y-0 border-l-0 rounded-none w-[275px] duration-300 transition-[width,margin] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] relative overflow-hidden h-full flex flex-col after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:z-[-1] after:xl:hidden group-[.side-menu--mobile-menu-open]:ml-0 group-[.side-menu--mobile-menu-open]:after:block -ml-[275px] after:hidden">
                <div className="close-mobile-menu fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden [&.close-mobile-menu--mobile-menu-open]:flex hidden">
                  <a className="mt-5 ml-5" href="">
                    <i data-tw-merge="" data-lucide="x" className="stroke-[1] w-8 h-8 text-white"></i>
                  </a>
                </div>
                <div className="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent [&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30">
                  <ul className="scrollable">

                    <li className="side-menu__divider">
                      DASHBOARDS
                    </li>
                    <li>
                      <a href="dagger-dashboard-overview-1.html" className="side-menu__link ">
                        <GaugeCircle className="stroke-[1] w-5 h-5 side-menu__link__icon"/>
                        <div className="side-menu__link__title">E-Commerce</div>
                      </a>

                    </li>
                    <li>
                      <a href="dagger-dashboard-overview-2.html" className="side-menu__link ">
                      <LucideAArrowDown
                          
                          className="stroke-[1] w-5 h-5 side-menu__link__icon"
                        />
                        <div className="side-menu__link__title">CRM</div>
                      </a>

                    </li>
                    <li>
                      <a href="dagger-dashboard-overview-3.html" className="side-menu__link ">
                        <i data-tw-merge="" data-lucide="album" className="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                        <div className="side-menu__link__title">Hospital</div>
                      </a>

                    </li>
                    <li>
                      <a href="dagger-dashboard-overview-4.html" className="side-menu__link ">
                        <i data-tw-merge="" data-lucide="book-marked" className="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                        <div className="side-menu__link__title">Factory</div>
                      </a>

                    </li>
                    <li>
                      <a href="dagger-dashboard-overview-5.html" className="side-menu__link ">
                        <i data-tw-merge="" data-lucide="hard-drive" className="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                        <div className="side-menu__link__title">Banking</div>
                      </a>

                    </li>
                    <li>
                      <a href="dagger-dashboard-overview-6.html" className="side-menu__link ">
                        <i data-tw-merge="" data-lucide="mouse-pointer-square" className="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                        <div className="side-menu__link__title">Cafe</div>
                      </a>

                    </li>
                    <li>
                      <a href="dagger-dashboard-overview-7.html" className="side-menu__link ">
                        <i data-tw-merge="" data-lucide="shield-half" className="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                        <div className="side-menu__link__title">Crypto</div>
                      </a>

                    </li>
                    <li>
                      <a href="dagger-dashboard-overview-8.html" className="side-menu__link ">
                        <i data-tw-merge="" data-lucide="building" className="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                        <div className="side-menu__link__title">Hotel</div>
                      </a>

                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    
    </>
  );
}
