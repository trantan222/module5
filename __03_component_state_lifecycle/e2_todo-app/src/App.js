import logo from './logo.svg';
import './App.css';
import {Component} from "react";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: "no"
        }
    }
    handleChange(event){
        console.log(this.state.item)
        this.setState({
            item : event.target.value
            }, () =>{
            console.log(this.state.item)
        }
        )
    }
    handleAddItem = () => {
        if (!this.state.list.includes(this.state.item)) {
            this.setState((prevState) => ({
                item: "",
                list: [prevState.item, ...prevState.list]
            }))
        }
    }
    render() {
        return <div>
            <h1>Todo List</h1>
            <input  onChange={(event => this.handleChange(event))} type="item" value={this.state.item}/>
            <button onClick={this.handleAddItem}>Add</button>
            <table>
                <tbody>
                {this.state.list.map((todo,index) =>(
                    <tr key={index}>
                        <td>{todo}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    }
}


export default App;
