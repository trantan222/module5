import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {List} from "./Components/Product/List";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import {Create} from "./Components/Product/Create";

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<List/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
