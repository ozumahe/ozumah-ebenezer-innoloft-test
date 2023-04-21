import { createBrowserRouter } from "react-router-dom";
import { EditProduct, Main, ViewProduct } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/product",
    element: <ViewProduct />,
  },
  {
    path: "/product/edit",
    element: <EditProduct />,
  },
]);

export default router;
