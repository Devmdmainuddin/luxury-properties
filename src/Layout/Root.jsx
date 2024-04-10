import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Root = () => {
    const { loader } = useContext(AuthContext)
    if (loader) {
        return <div className="text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>

    }

    return (
        <div>
            <div className="h-[91px]">
                <Header></Header>
            </div>
            <div className="md:min-h-[calc(100vh-419px)] max-w-[1170px] mx-auto">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;