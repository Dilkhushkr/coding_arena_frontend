import { Route,Routes } from 'react-router-dom'
import Login from '../page/Login'
import Dashboard from '../page/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { checkAuthRequest } from '../redux/slice/authSlice'
type Props = {}

const AppRoutes = (props: Props) => {
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(checkAuthRequest());
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>
        } />
    </Routes>
  )
}
export default AppRoutes