import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Carts/Cart";
import NotFoundthem from "./Pages/NotFoundthem";
import Products from "./Components/Myproducts";
import Detailse from "./Pages/Detailse/detailse";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product" element={<Products />} />
      <Route path="product-detailse/:id" element={<Detailse />} />
      <Route path="*" element={<NotFoundthem />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
