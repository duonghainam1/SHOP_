import LayoutAdmin from "@/pages/(dashboard)/layout";
import ProductManagement from "@/pages/(dashboard)/product/page";
import Signin from "@/pages/(website)/(auth)/Signin";
import NotFound from "@/pages/(website)/404/page";
import AboutPage from "@/pages/(website)/about/page";
import CartPage from "@/pages/(website)/cart/page";
import ContactPage from "@/pages/(website)/contact/page";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import OrderPage from "@/pages/(website)/order/page";
import CategoryDetail from "@/pages/(website)/product/category/detail/page";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Page from "@/pages/(website)/shop/Page";
import Page_Detail from "@/pages/(website)/productDetail/Page";
import AddProducts from "@/pages/(dashboard)/product/_components/AddProducts";
import UpdateProducts from "@/pages/(dashboard)/product/_components/UpdateProducts";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="shop" element={<Page />} />
                    <Route path="products/:id" element={<Page_Detail />} />
                    <Route path="categories/:id" element={<CategoryDetail />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="order" element={<OrderPage />} />
                </Route>
                <Route
                    path="admin"
                    element={
                        <PrivateRoute>
                            <LayoutAdmin />
                        </PrivateRoute>
                    }
                >
                    <Route path="products" element={<ProductManagement />} />
                    <Route path="products/add" element={<AddProducts />} />
                    <Route path="products/:id/edit" element={<UpdateProducts />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Router;
