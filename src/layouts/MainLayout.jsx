import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;