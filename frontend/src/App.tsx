import './App.css';
import NavBar from "./components/NavBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import AdminCreationPage from "./pages/AdminCreationPage";
import AdminEditComponentsPage from "./pages/AdminEditComponentsPage";
import WelcomePage from "./pages/WelcomePage";
import Homepage from "./pages/Homepage";
import useComponent from "./hooks/useComponent";
import React from "react";
import RegisterPage from "./pages/RegisterPage";


export default function App() {
    const {
        addComponent,
        handleLogin,
        handleRegister,
        handleLogout,
        deleteFunction,
        editComponent,
        setAdmin,
        components,
        isAdmin,
        isLoggedIn,
        me,
        role
    } = useComponent();


    return (
        <div className="container">


            <HashRouter>
                <NavBar isAdmin={isAdmin} isLoggedIn={isLoggedIn} role={role}/>
                <main>
                    <Routes>

                        <Route path={"/"} element={<WelcomePage isAdmin={isAdmin} setAdmin={setAdmin}
                                                                handleRegister={handleRegister}
                                                                handleLogin={handleLogin}
                                                                handleLogout={handleLogout} me={me} role={role}/>}/>
                        <Route path={"/admin/AdminCreationPage"}
                               element={<AdminCreationPage addComponent={addComponent} components={components}
                                                           deleteComponent={deleteFunction}/>}/>
                        <Route path={"/admin/AdminEditComponentsPage"}
                               element={<AdminEditComponentsPage editComponent={editComponent}
                                                                 components={components}/>}/>
                        <Route path={"/user/Homepage"} element={<Homepage/>}/>
                        <Route path={"/user/RegisterPage"} element={<RegisterPage handleRegister={handleRegister}/>}/>


                    </Routes>

                </main>

            </HashRouter>


        </div>
    );
}
