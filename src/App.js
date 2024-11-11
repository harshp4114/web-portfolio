import React ,{useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  useEffect(() => {
    const svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="96" height="96">
        <g transform="translate(20, 70)">
          <text x="-24" y="-5" font-family="Arial" font-weight="300" font-size="70" fill="#FFFFFF" font-style="italic">H</text>
          <text x="17" y="35" transform="rotate(17)" font-family="Arial" font-weight="100" font-size="140" fill="#FFFFFF">/</text>
          <text x="49" y="45" font-family="Arial" font-weight="300" font-size="70" fill="#FFFFFF" font-style="italic">P</text>
        </g>
      </svg>
    `;

    const blob = new Blob([svgIcon], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link =
      document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/svg+xml";
    link.rel = "icon";
    link.href = url;
    document.head.appendChild(link);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Body />,
      },
      {
        path: "/random-project",
        element: <Body />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
