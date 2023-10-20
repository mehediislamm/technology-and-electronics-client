import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";


const Root = () => {
    return (
        <div className=" max-w-[1450px] mx-auto font-Poppine ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;