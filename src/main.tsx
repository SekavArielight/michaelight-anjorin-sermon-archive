import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import About from './pages/About.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/about", element: <About/>},
  {path: "/notfoundpage", element: <NotFoundPage/>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
