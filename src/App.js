import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import News from './pages/News';
import HotelDetail from './pages/HotelDetail/HotelDetail';
import Bookings from './pages/Bookings/Bookings';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch("http://localhost:5000/hotels")
        },
        {
          path:'/hotels/:id',
          element:<HotelDetail></HotelDetail>,
          loader:({params})=>fetch(`http://localhost:5000/hotels/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/news',
          element:<News></News>
        },
        {
          path:'/bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    }
  ])
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
     <Toaster/>
    </div>
  );
}

export default App;
