import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import BaseLayout from "../layout/BaseLayout";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <BaseLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
  return routes;
};
export default Routes;
