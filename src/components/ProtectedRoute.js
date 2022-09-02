import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import * as authActions from "../store/authState/authState.creators"



const ProtectedRoute = (props) => {
    
    let auth = localStorage.getItem('jwtToken');
    if (auth) {
        return <Outlet />;
    }
    return <Navigate to="/" />;

}

const mapStateToProps = state => {
    return({
        userData: state.userData
    })
}

export default connect(mapStateToProps, authActions) (ProtectedRoute);