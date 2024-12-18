import Home from "../pages/Home";
import List from "../pages/List";
import SiteRoute from "../pages/siteRoutes/SiteRoute";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoute />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
  },
];
