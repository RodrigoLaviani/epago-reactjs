import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import { UserForm, ShoppingCart, Preview } from "../src/pages/index";
import Button from "./components/button/Button";
import Settings from "./components/settings/Settings";
import Epago from "./assets/images/epago.png";


const App = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [isStart, setIsStart] = useState(true);
  
  useEffect(() => {
    setIsStart(window.location.pathname === '/')
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<UserForm changePath={() => setIsStart(false)} />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="/preview" element={<Preview />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <section className="header-section">
        <img src={Epago} alt="E-Pago" className="logo"></img>
        <div className="header-buttons">
          <Button value={'Inicio'} disabled={isStart} handlerButton={() => { window.location.href = '/' }}/>
          <Button value={'Configuración'} disabled={false} handlerButton={() => setOpenSettings(true)}/>
        </div>
      </section>
      <section className="page-section">
        <RouterProvider router={router} />
      </section>
      {openSettings && <Settings handler={setOpenSettings} />}
    </div>
  );
}

export default App;