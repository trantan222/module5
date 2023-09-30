import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import form from "./componentss/form";
import {NavLink, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <NavLink to="/home"></NavLink>
      <Routes>
          <Route path="/" element={<form/>}></Route>
      </Routes>
    </>
  );
}

export default App;
