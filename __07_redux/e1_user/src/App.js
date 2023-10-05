import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import List from "./components/List";
import Delete from "./components/Delete";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<List/>}></Route>
          <Route path="/delete/:id" element={<Delete/>}></Route>
        </Routes>

      </>
  );
}

export default App;
