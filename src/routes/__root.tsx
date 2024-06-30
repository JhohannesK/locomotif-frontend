import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => {
    return (
      <div>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </div>
    )
  },
  notFoundComponent: () => {
    return <p>This is the notFoundComponent configured on root route</p>
  },
})
