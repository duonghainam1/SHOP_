// import { useProductQuery } from '@/common/hooks/useProductQuery'
import Banner from './_component/Banner'
import Blog from './_component/Blog'
import Services from './_component/Services'
import Best_dispensary from './_component/Best_dispensary'
import Comment from './_component/Comment'
import ChooseYourWeed from './_component/ChooseYourWeed'
import HowToOrder from './_component/HowToOrder'
import WhatMake from './_component/WhatMake'
import Recenty from './_component/Recenty'
import WeedEducation from './_component/WeedEducation'

const HomePage = () => {
    // const { data } = useProductQuery({ _limit: 2 })
    // const featuredProducts = data?.data.filter((product: IProduct) => product.featured === true)
    return (
        <>
            <Banner />
            <Services />
            <Best_dispensary />
            <Comment />
            <ChooseYourWeed />
            <HowToOrder />
            <WhatMake />
            <Recenty />
            <Blog />
            <WeedEducation />
        </>
    )
}

export default HomePage
