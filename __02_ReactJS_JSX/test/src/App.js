import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types";
import React from "react";
class App extends React.Component{
    constructor(props) {
        super(props);

    this.state ={
        header :"a",
        content :"b"
    }
    }
    render() {
        return(
          <div>
              <h1>{this.state.header}</h1>
              <h1>{this.state.content}</h1>
          </div>
        )
    }
}


function App() {
  return (
    <div>
        {/*<h3>Array: {props.propArray}</h3>*/}
        {/*<h3>Bool: {props.propBool ? "True..." : "False..."}</h3>*/}
        {/*<h3>Func: {props.propFunc(3)}</h3>*/}
        {/*<h3>Number: {props.propNumber}</h3>*/}
        {/*<h3>String: {props.propString}</h3>*/}
        {/*<h3>Object: {props.propObject.objectName1}</h3>*/}
        {/*<h3>Object: {props.propObject.objectName2}</h3>*/}
        {/*<h3>Object: {props.propObject.objectName3}</h3>*/}
        {/*<p></p>*/}
    </div>
      )
}
// App.prototypes = {
//     propArray: PropTypes.array.isRequired,
//     propBool: PropTypes.bool.isRequired,
//     propFunc: PropTypes.func,
//     propNumber: PropTypes.number,
//     propString: PropTypes.string,
//     propObject: PropTypes.object
// }
// App.defaultProps = {
//     propBool: true,
//     propFunc: function(e) {
//         return e;
//     },
//     propNumber: 1,
//     propString: "String value...",
//
//     propObject: {
//         objectName1: "objectValue1",
//         objectName2: "objectValue2",
//         objectName3: "objectValue3"
//     }
// };
export default App;
