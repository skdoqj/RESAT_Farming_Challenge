import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { GlobalStyle } from "./styles/styles";
import Main from "./pages/MainPage";
import Layout from "./components/Layout";
import Timer from "./pages/TimerPage";
import Todo from "./pages/TodoPage";
import Calender from "./pages/CalenderPage";
import Carousel from "./pages/CarouselPage";

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
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/carousel",
        element: <Carousel />,
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
