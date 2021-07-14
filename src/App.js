import { useEffect, useState } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList.jsx";

function App() {

  const [isLoading, setIsLoading] = useState(null)
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [after, setAfter] = useState(null)
  const [feed, setFeed] = useState('hot')
  const PAGINATED_URL = `https://www.reddit.com/r/reactjs/${feed}/.json?limit=10&after=${after}&count=10`

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    setAfter(null)

    fetchAPI(`https://www.reddit.com/r/reactjs/${feed}/.json?limit=10`)
  },[feed])

  const fetchAPI = (url) => {
    setIsLoading(true)
    if(error) {
      setError(null)
    }
    fetch(url)
    .then(response => response.json())
    .then(newResponse => {
      setAfter(newResponse.data.after)
      if (newResponse.data.before === null) {
        setPosts(newResponse.data.children)
      } else {
        setPosts([...posts, ...newResponse.data.children])
      }
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <div className="App">
      <Header setFeed={setFeed}/>
      <>
      <PostList posts ={posts}/>
      {after && <button className="ver-mais" onClick={() => fetchAPI(PAGINATED_URL)}>Load more.</button>}
      {isLoading && <p className="loading">Loading...</p>}
      </>

      {/*tratamento de erro*/}
      {error && 
      <div className="error-handling">
        <p>Error on loading posts.</p>
        <button onClick={() => fetchAPI()}>Try Again</button>
      </div>}
    </div>
  );
}

export default App;