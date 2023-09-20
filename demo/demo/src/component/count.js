import {Component} from "react";

export class Count extends Component{
    constructor() {
        super();
        this.state = {
            count : 0

        }

    }
    decrease = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }
    increase = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    componentDidMount() {
        document.title = `you click ${this.state.count} times`
    }
    componentDidUpdate() {
        document.title = `you click ${this.state.count} times`
    }

    render() {
        return <div>
            <button onClick={()=>this.setState({count : this.state.count -1 })}>Decrease</button>
            <p>{this.state.count}</p>
            <button onClick={() => this.setState({count : this.state.count + 1})}>Increase</button>
        </div>;
    }
}