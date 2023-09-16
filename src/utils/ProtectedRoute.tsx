import { Navigate } from 'react-router-dom'
import { routhPaths } from '../routes'
import { ProtectedRouteProps } from '../types'
import { authState } from '../redux/slices/authSlice'

const ProtectedRoute = ({
  allowedRoles,
  userRole,
  children,
}: ProtectedRouteProps) => {
  console.log('🚀 ~ file: ProtectedRoute.tsx:11 ~ userRole:', userRole)
  const isAuthenticated: boolean = authState?.isAuthenticated
  console.log(
    '🚀 ~ file: ProtectedRoute.tsx:12 ~ isAuthenticated:',
    isAuthenticated
  )

  if (isAuthenticated && userRole && allowedRoles.includes(userRole)) {
    return children
  } else {
    console.log('not authenticated')
    return <Navigate to={routhPaths.personnel_signin} />
  }
}

export default ProtectedRoute
