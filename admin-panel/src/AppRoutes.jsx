import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
  import { Home, Login } from './pages/index';

const AppRoutes = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;