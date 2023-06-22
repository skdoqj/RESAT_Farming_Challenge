import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "./pages/MainPage";
import Layout from "./components/Layout";
import Timer from "./pages/TimerPage";
import Todo from "./pages/TodoPage";

import { GlobalStyle } from "./styles/styles";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/timer",
        element: <Timer />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
