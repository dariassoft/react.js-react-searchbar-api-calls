import './App.css'
import {SearchBar} from "./components/SearchBar.jsx";
import {useState} from "react";
import {SearchResultList} from "./components/SearchResultList.jsx";

function App() {

    const [results, setResults] = useState([]);

    return <div className="App">
        <div className="search-bar-container">
            <SearchBar setResults={setResults} />
            <SearchResultList results={results} />
        </div>
    </div>
}

export default App
