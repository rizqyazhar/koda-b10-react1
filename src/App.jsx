import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SurveyFormPage from "./pages/SurveyFormPage";
import TablePage from "./pages/TablePage";

const router = createBrowserRouter([
  { path: "/", element: <SurveyFormPage /> },
  { path: "/table", element: <TablePage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
