import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '../src/routes/Routes.jsx'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import ContextComponent from './providers/ContextComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ContextComponent>
        <RouterProvider router={router} />
      </ContextComponent>
    </AuthProvider>
  </React.StrictMode>,
)
