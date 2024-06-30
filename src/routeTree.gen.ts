/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PersonnelImport } from './routes/personnel'
import { Route as FacilityImport } from './routes/facility'
import { Route as IndexImport } from './routes/index'
import { Route as LocomotifGetStartedImport } from './routes/locomotif/get-started'
import { Route as LocomotifAuthLayoutImport } from './routes/locomotif/auth/_layout'
import { Route as LocomotifAuthLayoutPersonnelSignUpImport } from './routes/locomotif/auth/_layout.personnel-sign-up'
import { Route as LocomotifAuthLayoutFacilitySignUpImport } from './routes/locomotif/auth/_layout.facility-sign-up'

// Create Virtual Routes

const LocomotifAuthImport = createFileRoute('/locomotif/auth')()

// Create/Update Routes

const PersonnelRoute = PersonnelImport.update({
  path: '/personnel',
  getParentRoute: () => rootRoute,
} as any)

const FacilityRoute = FacilityImport.update({
  path: '/facility',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LocomotifAuthRoute = LocomotifAuthImport.update({
  path: '/locomotif/auth',
  getParentRoute: () => rootRoute,
} as any)

const LocomotifGetStartedRoute = LocomotifGetStartedImport.update({
  path: '/locomotif/get-started',
  getParentRoute: () => rootRoute,
} as any)

const LocomotifAuthLayoutRoute = LocomotifAuthLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => LocomotifAuthRoute,
} as any)

const LocomotifAuthLayoutPersonnelSignUpRoute =
  LocomotifAuthLayoutPersonnelSignUpImport.update({
    path: '/personnel-sign-up',
    getParentRoute: () => LocomotifAuthLayoutRoute,
  } as any)

const LocomotifAuthLayoutFacilitySignUpRoute =
  LocomotifAuthLayoutFacilitySignUpImport.update({
    path: '/facility-sign-up',
    getParentRoute: () => LocomotifAuthLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/facility': {
      id: '/facility'
      path: '/facility'
      fullPath: '/facility'
      preLoaderRoute: typeof FacilityImport
      parentRoute: typeof rootRoute
    }
    '/personnel': {
      id: '/personnel'
      path: '/personnel'
      fullPath: '/personnel'
      preLoaderRoute: typeof PersonnelImport
      parentRoute: typeof rootRoute
    }
    '/locomotif/get-started': {
      id: '/locomotif/get-started'
      path: '/locomotif/get-started'
      fullPath: '/locomotif/get-started'
      preLoaderRoute: typeof LocomotifGetStartedImport
      parentRoute: typeof rootRoute
    }
    '/locomotif/auth': {
      id: '/locomotif/auth'
      path: '/locomotif/auth'
      fullPath: '/locomotif/auth'
      preLoaderRoute: typeof LocomotifAuthImport
      parentRoute: typeof rootRoute
    }
    '/locomotif/auth/_layout': {
      id: '/locomotif/auth/_layout'
      path: '/locomotif/auth'
      fullPath: '/locomotif/auth'
      preLoaderRoute: typeof LocomotifAuthLayoutImport
      parentRoute: typeof LocomotifAuthRoute
    }
    '/locomotif/auth/_layout/facility-sign-up': {
      id: '/locomotif/auth/_layout/facility-sign-up'
      path: '/facility-sign-up'
      fullPath: '/locomotif/auth/facility-sign-up'
      preLoaderRoute: typeof LocomotifAuthLayoutFacilitySignUpImport
      parentRoute: typeof LocomotifAuthLayoutImport
    }
    '/locomotif/auth/_layout/personnel-sign-up': {
      id: '/locomotif/auth/_layout/personnel-sign-up'
      path: '/personnel-sign-up'
      fullPath: '/locomotif/auth/personnel-sign-up'
      preLoaderRoute: typeof LocomotifAuthLayoutPersonnelSignUpImport
      parentRoute: typeof LocomotifAuthLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  FacilityRoute,
  PersonnelRoute,
  LocomotifGetStartedRoute,
  LocomotifAuthRoute: LocomotifAuthRoute.addChildren({
    LocomotifAuthLayoutRoute: LocomotifAuthLayoutRoute.addChildren({
      LocomotifAuthLayoutFacilitySignUpRoute,
      LocomotifAuthLayoutPersonnelSignUpRoute,
    }),
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/facility",
        "/personnel",
        "/locomotif/get-started",
        "/locomotif/auth"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/facility": {
      "filePath": "facility.tsx"
    },
    "/personnel": {
      "filePath": "personnel.tsx"
    },
    "/locomotif/get-started": {
      "filePath": "locomotif/get-started.tsx"
    },
    "/locomotif/auth": {
      "filePath": "locomotif/auth",
      "children": [
        "/locomotif/auth/_layout"
      ]
    },
    "/locomotif/auth/_layout": {
      "filePath": "locomotif/auth/_layout.tsx",
      "parent": "/locomotif/auth",
      "children": [
        "/locomotif/auth/_layout/facility-sign-up",
        "/locomotif/auth/_layout/personnel-sign-up"
      ]
    },
    "/locomotif/auth/_layout/facility-sign-up": {
      "filePath": "locomotif/auth/_layout.facility-sign-up.tsx",
      "parent": "/locomotif/auth/_layout"
    },
    "/locomotif/auth/_layout/personnel-sign-up": {
      "filePath": "locomotif/auth/_layout.personnel-sign-up.tsx",
      "parent": "/locomotif/auth/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
