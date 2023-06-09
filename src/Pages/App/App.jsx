import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Context } from '../../Components/Context/Context';
import { Home } from '../Home/Home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { SignIn } from '../SignIn/SignIn';
import { Navbar } from '../../Components/Navbar/Navbar'
import './App.css';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/shoes', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sing-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </Context>
  )
}

export default App
