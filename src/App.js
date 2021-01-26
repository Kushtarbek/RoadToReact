import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

// let str = 'text' //string
// let str1;        //undefined
// let n = null;    //object
// let bool = true;
// let num = "123"
// let bigint = "12312312"
// let arr = [12,45,67,89];

const users = [
  // { id: 1, firstName: "kushu", lastName: "the developer" },
  { id: null, firstName: null, lastName: null },
];

function App() {
  return (
    <div>
      <h1>My hacker stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />
      <List />
    </div>
  );
}

// function List({ list }) {
//   if (!list) {
//     return null;
//   }

//   return (
//     <div>
//       {!list.length ? (
//         <p>Sorry, the list is empty.</p>
//       ) : (
//         list.map((item) => <Item item={item} />)
//       )}
//     </div>
//   );
// }

// function Item({ item }) {
//   return (
//     <li>
//       {item.firstName} {item.lastName}
//     </li>
//   );
// }

export default App;
