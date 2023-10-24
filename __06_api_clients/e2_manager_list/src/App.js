import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {List} from "./components/List";
import {Create} from "./components/Create";
import {Update} from "./components/Update";
import {ToastContainer} from "react-toastify";
import {ListPhoneBook} from "./components/PhoneBook/ListPhoneBook";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
   <>
     <Routes>
         <Route path="/" element={<List/>}></Route>
         <Route path="/create" element={<Create/>}></Route>
         <Route path="/update/:id" element={<Update/>}></Route>
         <Route path="/phonebook" element={<ListPhoneBook/>}></Route>
     </Routes>
       <ToastContainer></ToastContainer>
   </>
  );
}

export default App;
