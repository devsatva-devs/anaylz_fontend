
import {
    createBrowserRouter,   
} from "react-router-dom";

import Layout from "../layout/layout";
import { ROUTE_PATH_MAP } from "../utils/enum";
import Home from "../containers/home";
import Connectors from "../containers/connectors";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: ROUTE_PATH_MAP.HOME,
                element:<Home/>
            },
            {
                path: ROUTE_PATH_MAP.CONNECTORS,
                element:<Connectors/>
            },
        ]
    },
]);

export default router;