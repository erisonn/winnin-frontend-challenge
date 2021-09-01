import { useState } from 'react';
import { useHistory } from 'react-router';
import './Search.scss'

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const history = useHistory()

    function handleQueryChange(e) {
        const value = e.target.value
        setSearchQuery(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(searchQuery || searchQuery !== '') {
            history.push(`/search/${searchQuery}`)
        }
    }

    return ( 
            <div role="search" className='search'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Search...' className='search-input' name={searchQuery} onChange={handleQueryChange} />
                    <input type="submit" value="Search" className='search-submit'/>
                </form>
            </div>
    );
}
 
export default Search;