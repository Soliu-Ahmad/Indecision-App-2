import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './css/style.scss'
import 'normalize.css/normalize.css';


const Layout = (props) => {
    return (<div>
        <h1>Header</h1>
        {props.children}
        <p>Footer</p>
    </div>)
}


// /////////////////////////// stateless functional component//////////////////////
// ////////////////////////// we start from it return ////////////////////////////

// // const User = (props) => {
// //     return (<div>
// //         <h1>Name: {props.firstName}</h1>
// //         <h2>Age {props.age}</h2>
// //     </div>)
// // }

// ReactDOM.render(
//     <Layout>
//         <div>
//             <h2>Body content</h2>
//             <p>This is a prop</p>
//         </div>
//     </Layout>,
//     document.getElementById('app')
// );

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))