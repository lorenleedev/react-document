import React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Document0 from "./documents/0/App";
import Document1 from "./documents/1/App";
import Document2 from "./documents/2/App";
import Document3 from "./documents/3/App";
import Document4 from "./documents/4/App";
import Document5 from "./documents/5/App";
import Document6 from "./documents/6/App";
import Document7 from "./documents/7/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/documents/0",
    element: <Document0/>,
  },
  {
    path: "/documents/1",
    element: <Document1/>,
  },
  {
    path: "/documents/2",
    element: <Document2/>,
  },
  {
    path: "/documents/3",
    element: <Document3/>,
  },
  {
    path: "/documents/4",
    element: <Document4/>,
  },
  {
    path: "/documents/5",
    element: <Document5/>,
  },
  {
    path: "/documents/6",
    element: <Document6/>,
  },
  {
    path: "/documents/7",
    element: <Document7/>,
  },
]);

export default router;