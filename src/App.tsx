import { RouterProvider } from "react-router-dom";
import router from "./router";
import Layout from "./components/Layout";
import { FC } from "react";

const App: FC = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
