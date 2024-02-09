import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Createpost from "./components/Createpost";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/createpost", element: <Createpost /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
