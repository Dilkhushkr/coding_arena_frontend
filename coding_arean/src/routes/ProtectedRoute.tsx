import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({children} : any){
    const {isAuthenticated,loading} = useSelector((state:any)=>state.auth);

    if(loading){
        return <h1>Loading...</h1>
    }

    return isAuthenticated ? children : <Navigate to="/" />
}