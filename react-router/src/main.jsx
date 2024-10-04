import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([//impoprt components that are used in router
  {
    path: "/", 
    element: <App />,
    children: [
      { 
        element: <Home />, 
        index: true //index route does not need any path
      },
      {
        path:"about",
        element: <About />,
      },
      { 
        path: "contact", 
        element: <Contact />, 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
); 
