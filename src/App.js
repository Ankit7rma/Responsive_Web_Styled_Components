import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Pages
import Home from "./pages/Home"
import PricingPage from "./pages/PricingPage";
import SignupPage from "./pages/SignupPage";
import GlobalStyle from "./globalStyles";

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"pricing",
      element:<PricingPage/>
    },
    {
      path:"signup",
      element:<SignupPage/>
    },
  ])
  return (
    <RouterProvider router={appRouter}>
     <GlobalStyle/>
  
    </RouterProvider>
  );
}

export default App;
