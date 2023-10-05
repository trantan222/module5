import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import List from "./components/List";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<List/>}></Route>
        </Routes>

      </>
  );
}

export default App;
