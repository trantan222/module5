import './App.css';
import {StudentCreate} from "./components/StudentCreate";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {StudentList} from "./components/StudentList";
import {StudentUpdate} from "./components/StudentUpdate";
import {NotFound} from "./components/NotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavLink to='/students'>List</NavLink>
                <NavLink to='/students/create' style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : ""
                    };
                }}>Create</NavLink>
                <Routes>
                    <Route path="/students" element={<StudentList/>}></Route>
                    <Route path="/students/create" element={<StudentCreate/>}></Route>
                    <Route path="/edit/:id" element={<StudentUpdate/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
