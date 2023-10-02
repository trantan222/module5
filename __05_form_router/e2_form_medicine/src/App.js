import logo from './logo.svg';
import './App.css';
import {Medicine} from "./componentss/Medicine";
import {NavLink, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <NavLink to="/home"></NavLink>
      <Routes>
          <Route path="/" element={<Medicine/>}></Route>
      </Routes>
    </>
  );
}

export default App;
