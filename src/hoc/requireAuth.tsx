import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../provider/authProvider'


const RequireAuth=({ children })=>{
    const location = useLocation();
    // const navigate = useNavigate();
    const auth = useAuthContext()
    if (!auth.user) {
        return <Navigate to='/login' state={{ from: location.pathname }} />
    }
    return children
}

export default RequireAuth