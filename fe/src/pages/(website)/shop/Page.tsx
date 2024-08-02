import Filter from './_component/Filter'
import Products_1 from './_component/Products'
import Service from './_component/Service'

const Page = () => {
    return (
        <>
            <Service />
            <div className="w-full lg:py-10 py-4 border pb-[199px] border-b-2 mb-64">
                <div className="lg:container lg:mx-auto lg:w-[1315px] mb:w-full grid lg:grid-cols-[304px_978px] mb:grid-cols-[100%] *:w-full justify-between">
                    <Filter />
                    <Products_1 />
                </div>
            </div>
        </>
    )
}

export default Page