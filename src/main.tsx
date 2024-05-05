import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './utils/theme.ts'
import { RouterProvider } from 'react-router-dom'
import routes from './routes.tsx'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SetupInterceptor } from './utils/lib/SetupInterceptor.tsx'
import store, { persistor } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SetupInterceptor>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={routes} />
            </QueryClientProvider>
          </ThemeProvider>
        </SetupInterceptor>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
