
const Menu_list = () => {
    return (
        <>
            <div className="mb:w-[342px] lg:w-full flex justify-between items-center border-b lg:pb-6 mb:pb-4">
                <strong className="lg:text-2xl mb:text-base font-normal">Shop</strong>
                <div className="flex gap-x-[10px]">
                    <div className="relative lg:hidden group w-[78px] flex place-items-center gap-x-2 h-[34px] border rounded-[100px] px-3 cursor-pointer border-gray-300 text-gray-700 text-xs tracking-[-0.5px]">
                        Filter <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down group-hover:rotate-180 duration-300">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                        <ul className="absolute hidden group-hover:block top-full bg-white shadow-xl p-3 *:mb-3 *:mx-2 *:whitespace-nowrap left-0 columns-2 *:duration-300">
                            <li className="hover:text-[#17AF26]">John Mayer</li>
                            <li className="hover:text-[#17AF26]">John Mayer</li>
                            <li className="hover:text-[#17AF26]">John Mayer</li>
                            <li className="hover:text-[#17AF26]">John Mayer</li>
                            <li className="hover:text-[#17AF26]">John Mayer</li>
                        </ul>
                    </div>
                    <div className="relative group flex lg:gap-x-3 gap-x-1.5 place-items-center py-2 border rounded-[100px] px-[14px] cursor-pointer border-gray-300 text-gray-700 lg:text-sm text-xs">
                        Short By Lates <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down group-hover:rotate-180 duration-300 lg:w-[22px] lg:h-[22px] w-[14px] h-[14px]">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                        <ul className="absolute hidden group-hover:block top-full right-0 bg-white shadow-xl py-2 px-3 *:my-2 *:whitespace-nowrap w-[50vw]">
                            <li>John Mayer</li>
                            <li>John Mayer</li>
                            <li>John Mayer</li>
                            <li>John Mayer</li>
                            <li>John Mayer</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="lg:w-[864px] mb:w-[342px] lg:mt-9 lg:pb-8 mb:pb-6 mb:mt-6">
                <span className="lg:text-xl mb:text-base text-[#17AF26]">Cannabis</span>
                <p className="text-[#717378] mt-4 lg:text-base mb:text-[14px]">Here at WestCoastSupply’s “ cannabis
                    section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at
                    the best prices online. You can be assured that all our strains go through a strict screening
                    process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced
                    from reputable growers, based in British Columbia, Canada. We have hige grade selection comes
                    from growers that produce AAAA+ quality cannabis flowers and have many years of experience in
                    the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best
                    prices online with our unbeatable sales!</p>
            </div>
        </>
    )
}

export default Menu_list