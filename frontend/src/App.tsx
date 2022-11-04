import './App.css';
import NavBar from "./components/NavBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import AdminCreationPage from "./pages/AdminCreationPage";
import AdminEditComponentsPage from "./pages/AdminEditComponentsPage";
import WelcomePage from "./pages/WelcomePage";
import Homepage from "./pages/Homepage";
import useComponent from "./hooks/useComponent";
import React, {Component} from "react";
import RegisterPage from "./pages/RegisterPage";
import {AdminComponent} from "./model/AdminComponent";


export default function App() {
    const {
        addComponent,
        components,
        deleteFunction,
        editComponent,
        handleRegister,
        handleLogin,
        handleLogout,
        setAdmin,
        isAdmin
    } = useComponent();


    return (
        <div className="App">
            <header className="App-header">Check&Computify

                <HashRouter>
                    <NavBar isAdmin={isAdmin}/>
                    <Routes>

                        <Route path={"/"} element={<WelcomePage isAdmin={isAdmin} setAdmin={setAdmin}
                                                                handleRegister={handleRegister}
                                                                handleLogin={handleLogin}
                                                                handleLogout={handleLogout}/>}/>
                        <Route path={"/api/admin/AdminCreationPage"}
                               element={<AdminCreationPage addComponent={addComponent}  components={components}
                                                           deleteComponent={deleteFunction}/>}/>
                        <Route path={"/api/admin/AdminEditComponentsPage"}
                               element={<AdminEditComponentsPage editComponent={editComponent}
                                                                 components={components}/>}/>
                        <Route path={"/api/user/Homepage"} element={<Homepage/>}/>
                        <Route path={"/api/user/RegisterPage"} element={<RegisterPage handleRegister={handleRegister}/>}/>



                    </Routes>

                </HashRouter>


            </header>

        </div>
    );
}
