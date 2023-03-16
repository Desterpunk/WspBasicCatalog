import CheackoutPage from "./components/CheackoutPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Products />,
        errorElement: <NotFound />
      },
      {
        path: "/checkout",
        element: <CheackoutPage />,
        errorElement: <NotFound />
      },
      {
        path: "/signup",
        element: <SignUp />,
        errorElement: <NotFound />
      }
      ,
      {
        path: "/signin",
        element: <SignIn />,
        errorElement: <NotFound />
      }
    ]
    
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
