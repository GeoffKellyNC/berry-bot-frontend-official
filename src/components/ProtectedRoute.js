import { Outlet, Navigate } from "react-router-dom";



const ProtectedRoute = () => {
    let auth = localStorage.getItem('jwtToken');
    if (auth) {
        return <Outlet />;
    }
    return <Navigate to="/" />;

}

export default ProtectedRoute;