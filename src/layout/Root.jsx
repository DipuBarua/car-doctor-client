import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Root = () => {
    return (
        <div className=" container mx-auto font-inter">
            <NavBar></NavBar>
            <p>THis is Root</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;