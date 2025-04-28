import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import ProductPage from './routes/ProductPage.jsx'
import Vouchers from './routes/Vouchers.jsx'
import Brands from './routes/Brands.jsx'
import StoreReviews from './routes/StoreReviews.jsx'
import Contact from './routes/Contact.jsx'
import Cart from './routes/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/vouchers",
        element: <Vouchers/>,
      },
      {
        path: "/brands",
        element: <Brands/>,
      },{
        path: "/feedbacks",
        element: <StoreReviews/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/smartphones",
        element: <div>smartphones</div>,
      },{
        path: "/smartwatches",
        element: <div>smartwatches</div>,
      },{
        path: "/chargers",
        element: <div>carregadores</div>,
      },{
        path: "/powerbanks",
        element: <div>powerbanks</div>,
      },{
        path: "/phoneholders",
        element: <div>suportes</div>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/favorites",
        element: <div>favoritos</div>,
      },
      {
        path: "/product/:id",
        element: <ProductPage/>,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
