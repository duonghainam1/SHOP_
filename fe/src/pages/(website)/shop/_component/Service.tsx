
const Service = () => {
    return (
        <div className="w-full bg-[#F2F6F4]">
            <div className="container mx-auto lg:w-[1313px] mb:w-[342px] lg:py-6 mb:py-4 flex *:lg:w-[394.67px] *:mb:w-[86px] *:lg:h-[48px] items-center justify-between *:relative">
                {/* item */}
                <div className="flex lg:flex-row mb:flex-col mb:items-start lg:items-center lg:gap-x-4 lg:gap-y-0 gap-y-[9.9px]">
                    <img className="p-2 border lg:w-12 lg:h-12 w-8 h-8 rounded-[50%] bg-white" src="../Images/truck-fast.png" alt="" />
                    <strong className="lg:text-xl tracking-[-0.3px] mb:text-sm">Reliable Shipping</strong>
                </div>
                {/* | */}
                {/* item */}
                <div className="flex lg:flex-row mb:flex-col mb:items-start lg:items-center lg:gap-x-4 lg:gap-y-0 gap-y-[9.9px] after:absolute after:top-0 after:left-[-8%] after:w-[116%] lg:after:h-full after:h-[30px] after:border-x-2">
                    <img className="p-2 border lg:w-12 lg:h-12 w-8 h-8 rounded-[50%] bg-white" src="../Images/safe-home.png" alt="" />
                    <strong className="lg:text-xl tracking-[-0.3px] mb:text-sm">You're Safe With Us</strong>
                </div>
                {/* | */}
                {/* item */}
                <div className="flex lg:flex-row mb:flex-col mb:items-start lg:items-center lg:gap-x-4 lg:gap-y-0 gap-y-[9.9px]">
                    <img className="p-2 border lg:w-12 lg:h-12 w-8 h-8 rounded-[50%] bg-white" src="../Images/coin.png" alt="" />
                    <strong className="lg:text-xl tracking-[-0.4px] mb:text-sm">Best Quality &amp; Pricing</strong>
                </div>
            </div>
        </div>

    )
}

export default Service