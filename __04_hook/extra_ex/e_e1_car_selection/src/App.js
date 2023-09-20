import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'



function Component() {
    const carList = ['MayBach S680', 'Mescerdes S600', 'Lexus ES Sport ']
    const colorList = ['White', 'Black', 'blue']
    let [selectedCar, setSelectedCar] = useState({
            car: carList[0],
            color: colorList[0]
        }
    )
    const handleCar = (e) =>{
        setSelectedCar(prevState => (
            {...prevState,
                car: e.target.value}))
    }
    const handleColor = (e) =>{
        setSelectedCar(prevState => (
            {...prevState,color: e.target.value}))
    }
    return (
        <div>
            <label>Select your Car :</label>
            <br/>
            <select id="car" value={selectedCar.car} onChange={handleCar}>
                {carList.map((car,index) =>(
                    <option key="index" value={car}>{car}</option>
                ))}
            </select>
            <br/>
            <select id="color" value={selectedCar.color} onChange={handleColor}>
                {colorList.map((color,index) =>(
                    <option key="index" value={color}>{color}</option>
                ))}
            </select>
            <br/>
            <h2>Selected Car {selectedCar.car} - {selectedCar.color}</h2>
        </div>
    )
}
function App() {
    return (
    <Component></Component>
        )
}

export default App;
