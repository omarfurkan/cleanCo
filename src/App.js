import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { publicRoute } from './Routes/PublicRoutes';
import { privateRoutes } from "./Routes/PrivateRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Services from "./Pages/Services";
import PrivateRoute from "./Authentication/PrivateRoute";
import About from "./Pages/About";
import AdminRoute from "./Authentication/AdminRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddAdmin from "./Pages/Dashboard/AddAdmin";
import AddService from "./Pages/Dashboard/AddService";





function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div >
      <Navbar>
        <Routes>

          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))
          }

          <Route element={<PrivateRoute />}>
            {
              privateRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))
            }
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path='add-admin' element={<AddAdmin />} />
              <Route path='add-service' element={<AddService />} />
            </Route>
          </Route>

        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
