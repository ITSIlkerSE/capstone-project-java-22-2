import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import AdminCreationPage from "./pages/AdminCreationPage";
import AdminEditComponentsPage from "./pages/AdminEditComponentsPage";
import LoginPage from "./pages/LoginPage";
import useComponent from "./hooks/useComponent";
import React from "react";
import RegisterPage from "./pages/RegisterPage";
import useLogin from "./hooks/useLogin";
import Homepage from "./pages/Homepage";
import CheckComponentsPage from "./pages/CheckComponentsPage";
import ComputifyPcPage from "./pages/ComputifyPcPage";
import SetupCheckerPage from "./pages/SetupCheckerPage";
import GenerateSetupPage from "./pages/GenerateSetupPage";
import AboutPage from "./pages/AboutPage";


export default function Root() {

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

        <>

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

                    <Route path={"/login"} element={<LoginPage handleLogin={handleLogin}/>}/>
                    <Route path={"/"}
                           element={<Homepage></Homepage>}></Route>
                    <Route path={"user/RegisterPage"}
                           element={<RegisterPage handleRegister={handleRegister}/>}/>

                    <Route path={"user/CheckComponentsPage"}
                           element={<CheckComponentsPage components={components}></CheckComponentsPage>}></Route>
                    <Route path={"user/ComputifyPcPage/*"}
                           element={<ComputifyPcPage components={components}></ComputifyPcPage>}></Route>
                    <Route path={"user/SetupCheckerPage/*"}
                           element={<SetupCheckerPage components={components}></SetupCheckerPage>}></Route>
                    <Route path={"user/GenerateSetupPage/*"}
                           element={<GenerateSetupPage></GenerateSetupPage>}></Route>
                    <Route path={"user/AboutPage"} element={<AboutPage></AboutPage>}></Route>

                </Routes>
            </main>
        </>
    );
}
