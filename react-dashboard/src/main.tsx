import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { routes } from "./routes/route";
import NotFound from "./pages/error/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
