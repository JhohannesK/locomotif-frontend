import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './utils/theme.ts'
import { RouterProvider } from '@tanstack/react-router'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SetupInterceptor } from './utils/lib/SetupInterceptor.tsx'
import store, { persistor } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

import { routeTree } from './routeTree.gen'
import { createRouter } from '@tanstack/react-router'

export const queryClient = new QueryClient()

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SetupInterceptor>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </ThemeProvider>
        </SetupInterceptor>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
