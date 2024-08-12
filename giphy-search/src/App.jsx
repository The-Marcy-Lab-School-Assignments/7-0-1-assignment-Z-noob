import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { useEffect, useState } from 'react'
import { handleFetch } from './utils';


function App() {
  const [gifs, setGifs] = useState([]);

    const handleGifsUpdate = (fetchedGifs) => {
        setGifs(fetchedGifs);
    };
    
  return (
    <div>
      <NavBar />
      <div className="ui container">
        <GifSearch onGifsFetched={handleGifsUpdate} />
        <br />
        <GifContainer thingsToRender={gifs}/>
      </div>
    </div>
  );
}
// color='black' title="Giphy Search" 
export default App;
