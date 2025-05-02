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
import ProductsSelection from './components/categoires_n_brands/productsSelection.jsx'

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
        element: <ProductsSelection selection={'smartphones'}/>,
      },{
        path: "/smartwatches",
        element: <ProductsSelection selection={'smartwatches'}/>,
      },{
        path: "/chargers",
        element: <ProductsSelection selection={'chargers'}/>,
      },{
        path: "/powerbanks",
        element: <ProductsSelection selection={'powerbanks'}/>,
      },{
        path: "/phoneholders",
        element: <ProductsSelection selection={'phoneholders'}/>,
      },{
        path: "/Asus",
        element: <ProductsSelection selection={'Asus'}/>,
      },{
        path: "/Samsung",
        element: <ProductsSelection selection={'Samsung'}/>,
      },{
        path: "/Xiaomi",
        element: <ProductsSelection selection={'Xiaomi'}/>,
      },{
        path: "/Huawei",
        element: <ProductsSelection selection={'Huawei'}/>,
      },{
        path: "/Motorola",
        element: <ProductsSelection selection={'Motorola'}/>,
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
