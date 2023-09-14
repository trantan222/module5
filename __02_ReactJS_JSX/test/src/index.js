import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// function print([a,...rest]) {
//     console.log(a)
//     console.log(rest)
// }
// print([1,2,3,4,5,6,7])
// function logger (a,...param) {
//     console.log(1,2,3,4);
// }
// logger(1,2,3,4)

// let arr = [1, 2, 3]
// let arr2 = [6, 7, 8]
// let arr3 = [...arr, ...arr2]
// // console.log(arr3)
// let ob1 = {
//     name: "a",
//     age: 18,
//     obb: {
//         a : "a",
//         b : "b",
//     }
// }
// let {...rest} = ob1
// console.log(rest)
// let obj2 = {
//     price: 19
// }
// let obj3 = {
//     ...ob1,
//     ...obj2,
//     ...arr3
// }
// console.log(obj3)
class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        <App></App>
        // return (
        //     <div>
        //         <h1>
        //             who lives in my Garage?
        //         </h1>
        //         <Car></Car>
        //     </div>
        // )
    }
}

// const header = "i am header"
// const content = "i am content"
// function App(props) {
//     return{
//
//     }
// }
// class Appp extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.header}</h1>
//                 <h2>{this.props.content}</h2>
//             </div>
//         );
//     }
// }
// const header = "a"
// const content = "b"


const article = {
    header: "a",
    content: "b"
}

function AApp(props) {
    return (
        <div>
            <h1>{props.article.content}</h1>
            <h2>{props.article.header}</h2>
        </div>
    )
}
// console.log(car());
root.render(
    <App></App>
// <AApp article={article}></AApp>
    // <Appp header="head" content="content"></Appp>
    // <App header={header} content={content}></App>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
