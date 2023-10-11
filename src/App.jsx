import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Scan from './pages/Scan.jsx'


// import PageNotFound from './components/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Scan></Scan> ,
  },

  // {
  //   path:'*',
  //   element: <PageNotFound></PageNotFound> ,
  // },
  
])

export default function App() {
  return(
    <div>
      <RouterProvider router= {router}></RouterProvider>
      {/* <h1>cidbiweubciebc</h1> */}
    </div>
    )
  }