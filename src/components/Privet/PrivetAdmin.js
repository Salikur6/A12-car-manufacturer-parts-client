import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Hooks/Spinner";
import useAdmin from "../Hooks/useAdmin";


const PrivetAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation();

    if (loading || adminLoading) {
        return <Spinner></Spinner>
    }

    if (!user || !admin) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }


    return children;
};

export default PrivetAdmin;