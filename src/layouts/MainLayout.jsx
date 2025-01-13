import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";


const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("register")
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default MainLayout;