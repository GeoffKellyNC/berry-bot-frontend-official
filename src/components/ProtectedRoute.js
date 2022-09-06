import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import * as authActions from "../store/authState/authState.creators"



const ProtectedRoute = ({twitchVerified, logoutUser}) => {
    
    let auth = localStorage.getItem('jwtToken');
    if (auth && twitchVerified) {
        return <Outlet />;
    }

    if (!auth || !twitchVerified) {
        logoutUser()
        return <Navigate to="/" />;
    }

    return <Navigate to="/" />;

}

const mapStateToProps = state => {
    return({
        userData: state.userData,
        twitchVerified: state.twitchVerified
    })
}

export default connect(mapStateToProps, authActions) (ProtectedRoute);