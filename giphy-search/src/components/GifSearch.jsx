import { useState, useEffect } from 'react';
import API_KEY from '../api/config.js'

function GifSearch({ onGifsFetched }) {
    const [inputValue, setInputValue] = useState('');
    const [offset, setOffset] = useState(0); // Added offset state
    const [loading, setLoading] = useState(false); // Prevent users from submitting multiple requests before the previous one is completed
    const [searchQuery, setSearchQuery] = useState(''); // State to store the current search query
    const SEARCH_URL = (query, offset) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&offset=${offset}&rating=g`;
    const TRENDING_URL = () => `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

    // Fetch GIFs whenever inputValue or offset changes
    useEffect(() => {
        //if (!inputValue.trim()) return; // Do not fetch if inputValue is empty
        setLoading(true);
        const fetchGifs = async () => {
            try {
                const url = searchQuery.trim() ? SEARCH_URL(searchQuery, offset) : TRENDING_URL();
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                const data = await response.json();
                // console.log(data)
                onGifsFetched(data.data); // Pass fetched gifs to parent
            } catch (error) {
                console.error('Error fetching GIFs:', error);
            } finally {
                // console.log([searchQuery, offset, onGifsFetched])
                setLoading(false);
            }
        };

        fetchGifs();
    }, [searchQuery, offset]); // Dependencies: searchQuery, offset
// I should also set a limit on offset should never go over (total_count -3) don't wanna do now
    const handleSubmit = async (event) => {
        event.preventDefault();
        setOffset(0); // Reset offset for new search
        setSearchQuery(inputValue); // Set the search query
    };

    const handleLoadMore = () => {
        setOffset(prevOffset => prevOffset + 3); // Increment offset by limit
    };


    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="textInput">Search for GIFs:</label>
        <input type="text" id="textInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit" disabled={loading}>Submit</button>
        <button onClick={handleLoadMore} disabled={loading || !searchQuery.trim()} // Disable if loading or no search query
        type="button">Load More</button>
        </form>
        
    )
}

export default GifSearch
