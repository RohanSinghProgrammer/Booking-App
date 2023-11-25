import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="hotels" element={<Hotels />} />
      <Route path="hotel/:id" element={<Hotel />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />

export default App;
