import { useContext } from "react";
import { AuthContext } from "../contextProviders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    // v-60.2 

    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user?.email) {
        return children;
    }

    // return <Navigate state={{from: location}} to={'/login'} replace></Navigate>
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoute;