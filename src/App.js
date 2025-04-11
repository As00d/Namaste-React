import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/context/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => {
  return import("./components/Grocery");
});
const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  // authentication code
  useEffect(() => {
    const data = {
      name: "anki",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <UserContext.Provider
      value={{ loggedInUser: userInfo, setUserInfo: setUserInfo }}
    >
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
