import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
    // Hàm useState() nhận vào một tham số là giá trị ban đầu
    // của state, trả về một cặp [value, handler] chứa giá trị
    // hiện tại của state, và handler để thay đổi state đó.
    const [count, setCount] = useState(0)



    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )

}


export default App;
