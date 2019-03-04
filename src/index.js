import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Hello from './components/Hello'
// let a = 10
// let arr = [
//   <h1>xxx</h1>,
//   <h2>xxx</h2>,
// ]

let arr2 = [
  '1',
  '2',
  '3',
]

let arr = [
  '张三',
  '李四',
  '王五',
  ...arr2
]

// arr = arr.concat(arr2)

// let arrTemp = []

// arr.forEach(item => {
//   arrTemp.push(<li>{item}</li>)
// })

// every some forEach
// let arrTemp = arr.map(item => {
//   return <li>{item}</li>
// })
// console.log(arrTemp)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<div title="oo">
  {/* <h1>我是h1---{a}</h1> */}
  <hr />
  <ul>
    {arr.map(item => <li className="ppp" key={item}>{item}</li>)}
  </ul>
  <Hello></Hello>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
