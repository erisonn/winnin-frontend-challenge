import { BrowserRouter, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Router from './Router'

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Redirect to='/reactjs/hot'/>
          <Header />
          <Router/>
        </BrowserRouter>
      </div>
  );
}

export default App;