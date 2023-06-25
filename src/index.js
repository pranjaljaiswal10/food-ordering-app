import {RouterProvider} from "react-router-dom";
import { createRoot } from "react-dom/client";

import appRouter from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <RouterProvider router={appRouter}/>
);