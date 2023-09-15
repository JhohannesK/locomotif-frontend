import { Navigate } from 'react-router-dom'
import { routhPaths } from '../routes'
import { ProtectedRouteProps } from '../types'
import { authState } from '../redux/slices/authSlice'

const ProtectedRoute = ({
  allowedRoles,
  userRole,
  children,
}: ProtectedRouteProps) => {
  const isAuthenticated: boolean = authState?.isAuthenticated

  if (isAuthenticated && userRole && allowedRoles.includes(userRole)) {
    return children
  } else {
    return <Navigate to={routhPaths.personnel_signin} />
  }
}

export default ProtectedRoute
