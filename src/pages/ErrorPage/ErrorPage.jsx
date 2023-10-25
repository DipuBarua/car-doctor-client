import { useRouteError } from "react-router-dom";
import img from "../../assets/images/errorPage/error404.png"
import NavBar from "../Shared/NavBar/NavBar";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <NavBar></NavBar>
            <div className=" text-center">
                <img src={img} alt="" />
            </div>
        </div>

    );
};

export default ErrorPage;