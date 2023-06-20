import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "./pages/MainPage";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
