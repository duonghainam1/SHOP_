import Products from "@/components/products/Products"

import List_Page from './List_Page'
import Menu_list from './Menu_list'
import Contentratest from "./Contentratest"
import Render_Products from "./Render_Products"

const Products_1 = () => {
    return (
        <div className="w-full flex flex-col mb:items-center lg:items-start">
            <Menu_list />
            {/* top best selling */}
            <div className="bg-[#F2F6F4] w-full lg:rounded-2xl lg:pt-[25px] lg:pb-6 lg:px-8 pt-[22px] pb-4">
                <strong className="lg:text-2xl mb:text-lg lg:tracking-[-0.5px] mb:mx-11 lg:mx-0 font-medium">Top Selling</strong>
                <div className="lg:w-auto mb:w-full mx-auto overflow-x-auto snap-x scroll_dragging duration-300 scroll-smooth hidden_scroll_x grid grid-flow-col *:lg:w-[282.67px] *:mb:w-[240px] lg:pt-[27px] mb:pt-6 lg:gap-x-[32px] gap-x-6">
                    <Products />
                </div>
            </div>
            {/* render products */}
            <Render_Products />
            {/* contentratest */}
            <div className="lg:w-full mb:w-full lg:rounded-3xl lg:my-8 mb:my-2 lg:h-[460px] mb:h-[671px] bg-gradient-to-r from-[#05422C] lg:pl-[56px] lg:pr-[88px] to-[#648A7C] mb:py-6 flex lg:flex-row mb:flex-col items-center justify-between">
                <Contentratest />
            </div>
            {/* products */}
            <Render_Products />
            <List_Page />
        </div>

    )
}

export default Products_1