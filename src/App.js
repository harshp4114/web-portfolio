import React ,{useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  useEffect(() => {
    const svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
        <rect x="2" y="8" width="28" height="48" rx="4" fill="#111418"/>
        <rect x="34" y="8" width="28" height="48" rx="4" fill="#111418"/>
        <text x="16" y="44" text-anchor="middle" font-family="Menlo, Consolas, monospace" font-weight="700" font-size="32" fill="#ffb000">H</text>
        <text x="48" y="44" text-anchor="middle" font-family="Menlo, Consolas, monospace" font-weight="700" font-size="32" fill="#ffb000">P</text>
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
