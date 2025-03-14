import { useState } from "react";

function SearchBar() {
    const [search, setSearch] = useState('');

    function handleInput(e) {
        const { value } = e.target;
        setSearch(value);
    }

    function onSubmit(e) {
        e.preventDefault();

        search(search);
        setSearch('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={search} onChange={handleInput} />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;