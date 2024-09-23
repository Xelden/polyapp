import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Vista1 from './routes/vista1'
import Vista2 from './routes/mix_polymers'
import Vista5 from './routes/search_polymers'
import Vista4 from './routes/suggest_polymers';
import About from './routes/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Vista1 />,
  },
  {
    path: "/mix_polymers",
    element: <Vista2 />,
  },
  {
    path: "/search_polymers",
    element: <Vista5 />,
  },
  {
    path: "/suggest_polymers",
    element: <Vista4 />,
  },
  {
    path: "/about",
    element: <About />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
