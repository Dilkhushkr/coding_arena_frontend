import { Route,Routes } from 'react-router-dom'
import Login from '../page/Login'
import Dashboard from '../page/Dashboard'
import ProtectedRoute from './ProtectedRoute'

type Props = {}

const AppRoutes = (props: Props) => {
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