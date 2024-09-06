import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Weather } from "./pages/Weather";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to='/forecast' />
    },
    {
      path: '/forecast',
      element: <Weather/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
