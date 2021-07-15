import { BrowserRouter, Redirect } from "react-router-dom";
import Router from './Router'

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Redirect to='/r/popular/hot'/>
          <Router/>
        </BrowserRouter>
      </div>
  );
}

export default App;