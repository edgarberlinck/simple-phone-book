import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ContactDetails from './components/Organisms/ContactDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contact/:id?',
    element: <ContactDetails />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
