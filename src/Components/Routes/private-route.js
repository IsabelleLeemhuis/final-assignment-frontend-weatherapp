import {
    Navigate,
    Outlet
} from "react-router-dom";

import './../../Context/AuthContext/Firebase/firebase.utils';

const PrivateRoutes = () => {
    let userAuth = {auth: true}

    return (
        userAuth ? <Outlet/> : <Navigate to='/sign-in'/>
    )
};

export default PrivateRoutes;