import React from 'react';
import {Link,createBrowserRouter,RouterProvider}  from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/portfolio', element: <Portfolio /> },
])




function App() {
  return (
    
      <RouterProvider router={router}/>

  );
}

export default App;