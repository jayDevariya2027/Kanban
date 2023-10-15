import React, { useEffect, useState } from "react";

import "./index.css";
import "./App.css";
import Users from "./components/Users/Users";
import Status from "./components/Status/Status";
import Priority from "./components/Priority/Priority";
import { StateContextProvider } from "./store/StateContextProvider";

// navbar
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Navbar/RootLayout";

function App() {
  //----------------- ROUTING -----------------
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "groupby",
          children: [
            {
              path: "users",
              element: <Users />,
            },
            {
              path: "status",
              element: <Status />,
            },
            {
              path: "priority",
              element: <Priority />,
            },
          ],
        },
      ],
    },
  ]);

  //
  return (
    <StateContextProvider>
      <RouterProvider router={router} />
    </StateContextProvider>
  );
}

export default App;
