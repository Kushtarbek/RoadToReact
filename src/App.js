import React from "react";

const App = () => {
  const stories = [
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
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || "React"
  );

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    const filteredSearch = story.title
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
    console.log(searchTerm, filteredSearch);
    return filteredSearch;
  });
  /*filter(function(story) {return story.title.includes(searchTerm);})
    The filter function takes a function as an argument, which accesses each item in the array and returns true or
    false. If the function returns true, meaning the condition is met, the item stays in the newly created
    array; if the function returns false, it’s removed*/

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

//----------Search Component
//const { search, onSearch } = props;    //props object destructuring
const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </div>
  );
};
//              UI -> Side-Effect -> State -> UI ...

//----------List Component
const List = ({ list }) =>
  list.map((item) => <Item key={item.objectID} item={item} />);

const Item = ({ title, url, author, num_comments, points }) => (
  <div>
    <span>
      <a href={url}> {title} </a>
    </span>
    <span> {author} </span>
    <span> {num_comments} </span>
    <span> {points} </span>
  </div>
);

export default App;
