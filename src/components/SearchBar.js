import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {    
    // prevents default form submission, which would grab the information then refresh the page
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
      <label>Enter Search Term</label>
      <input value={term} onChange={handleChange}/>
    </form>    
  </div>;
}

export default SearchBar;