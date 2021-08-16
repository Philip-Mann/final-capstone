import '../cases.css'
import { useState } from "react";
import CasesCards from '../display/casesCards'

const SearchCases = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        // console.log('SearchCases component:', searchQuery);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchQuery(searchQuery);
        console.log(searchQuery);
        setSearchQuery('');
    }

    return (
        <>
        <div className="search-cases-container">
            <form className="search-form">
                <input 
                    className="search-input"
                    onChange={handleSearch}
                    placeholder="Search By Name..."
                    value={searchQuery}
                />
                <button
                    className="search-submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
        <CasesCards />
        </>
    )
}

export default SearchCases;