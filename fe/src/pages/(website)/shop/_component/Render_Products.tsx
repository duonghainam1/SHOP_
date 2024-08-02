import Products from '@/components/products/Products'

const Render_Products = () => {
    return (
        <div className="lg:w-full mb:w-[342px] md:w-[95vw] grid lg:my-[33px] my-[29px] lg:grid-cols-[304px_304px_304px] mb:grid-cols-[159px_159px] lg:gap-y-8 gap-y-[29px] text-center justify-between">
            <Products />
        </div>
    )
}

export default Render_Products