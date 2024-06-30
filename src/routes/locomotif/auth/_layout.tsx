import Sidebar from '@/container/auth/shared/Sidebar'
import Constants from '@/utils/constants'
import { createFileRoute, Outlet, useMatchRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locomotif/auth/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const matchRoute = useMatchRoute()
  const facilityRoute = matchRoute({ to: '/locomotif/auth/facility-sign-up' })
  const personnelRoute = matchRoute({ to: '/locomotif/auth/personnel-sign-up' })

  const checkWhichRoute = () => {
    if (personnelRoute) {
      return Constants.SIDEBAR.PersonnelSteps
    }
    if (facilityRoute) {
      return Constants.SIDEBAR.FacilitySteps
    }
    return []
  }

  const steps = checkWhichRoute()

  return (
    <div className="flex flex-grow flex-row bg-background-secondary h-screen">
      <div className="p-3 flex flex-row w-full overflow-hidden">
        <Sidebar steps={steps} />
        <div className="w-full flex items-center justify-center h-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
