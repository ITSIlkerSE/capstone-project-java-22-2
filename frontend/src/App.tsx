import './App.css';
import useComponent from "./hooks/useComponent";
import AdminCreationPage from "./pages/AdminCreationPage";
import AdminEditComponentsPage from "./pages/AdminEditComponentsPage";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import WelcomePage from "./pages/WelcomePage";

function App() {

    const {addComponent, components, deleteFunction, editComponent, handleRegister, handleLogin, handleLogout} = useComponent();


    return (
        <div className="App">
            <h1>Check&Computify</h1>
            <NavBar></NavBar>
        <HashRouter>
            <NavLink to={"api/admin/AdminCreationPage"}>AdminCreationPage</NavLink>
            <NavLink to={"api/admin/AdminEditComponentsPage"}>EditPage</NavLink>
            <NavLink to={"api/user/WelcomePage"}>WelcomePage</NavLink>
            <Routes>

                <Route path={"/api/admin/AdminCreationPage"} element={<AdminCreationPage addComponent={addComponent} components={components} deleteComponent={deleteFunction}/>}/>
                <Route path={"/api/admin/AdminEditComponentsPage"} element={<AdminEditComponentsPage editComponent={editComponent} components={components}/>}/>
                <Route path={"/api/user/WelcomePage"} element={<WelcomePage handleRegister={handleRegister} handleLogin={handleLogin} handleLogout={handleLogout}/>}/>


            </Routes>
        </HashRouter>

        </div>
    );
}

export default App;
