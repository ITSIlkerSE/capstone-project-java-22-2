import './App.css';
import NavBar from "./components/NavBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import AdminCreationPage from "./pages/AdminCreationPage";
import AdminEditComponentsPage from "./pages/AdminEditComponentsPage";
import LoginPage from "./pages/LoginPage";
import useComponent from "./hooks/useComponent";
import React from "react";
import RegisterPage from "./pages/RegisterPage";
import useLogin from "./hooks/useLogin";
import Homepage from "./pages/Homepage";
import CheckPcPage from "./pages/CheckPcPage";
import ComputifyPcPage from "./pages/ComputifyPcPage";


export default function App() {

    const {addComponent, deleteFunction, editComponent, components} = useComponent();
    const {handleLogin, handleRegister, me} = useLogin();

    function isAdmin() {
        if (me && me.roles.find(role => role === "ADMIN")) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className="container">


            <HashRouter>

                <NavBar me={me}/>
                <main>
                    <Routes>

                        {isAdmin() &&
                            <>
                                <Route path={"admin/AdminCreationPage"}
                                       element={<AdminCreationPage addComponent={addComponent} components={components}
                                                                   deleteComponent={deleteFunction}/>}/>
                                <Route path={"admin/AdminEditComponentsPage"}
                                       element={<AdminEditComponentsPage editComponent={editComponent}
                                                                         components={components}/>}/>
                            </>
                        } 

                            <>
                            <Route path={"/"} element={<LoginPage handleLogin={handleLogin}/>}/>
                            <Route path={"user/RegisterPage"}
                                   element={<RegisterPage handleRegister={handleRegister}/>}/>
                            </>

                            <>
                            <Route path={"user/Homepage"} element={<Homepage></Homepage>}></Route>
                            <Route path={"user/CheckPcPage"} element={<CheckPcPage components={components}></CheckPcPage>}></Route>
                            <Route path={"user/ComputifyPcPage/*"} element={<ComputifyPcPage components={components}></ComputifyPcPage>}></Route>

                            </>

                    </Routes>
                </main>
            </HashRouter>


        </div>
    );
}
