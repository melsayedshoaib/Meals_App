import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Categories from './components/Categories/Categories'
import Home from './components/Home/Home'
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Random from './components/Random/Random'
import React from 'react'
import MealsContextProvider from "./context/Meals";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'categories', element: <Categories /> },
        { path: 'random', element: <Random /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  return (
    <div>
      <MealsContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </MealsContextProvider>
    </div>
  )
}
