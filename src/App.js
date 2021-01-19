import logo from "./logo.svg";
import "./App.css";

// let str = 'text' //string
// let str1;        //undefined
// let n = null;    //object
// let bool = true;
// let num = "123"
// let bigint = "12312312"
// let arr = [12,45,67,89];

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// var nums = [1, 3, 6, 7, 11];

// const newNums = numbers.map(function (number) {
//   return number * 2;
// });

function App() {
  return (
    <div>
      <h1>My hacker stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />
      {list.map(function (item) {
        return <div>{item.title}</div>;
      })}
    </div>
  );
}

export default App;
