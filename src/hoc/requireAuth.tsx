import { Navigate, useLocation } from 'react-router-dom'
import { useStore } from '../store';


const RequireAuth=({ children })=>{
    const location = useLocation();
   
   const store:any=useStore();
    if (!store?.user) {
        return <Navigate to='/login' state={{ from: location.pathname }} />
    }
    return children
}

export default RequireAuth