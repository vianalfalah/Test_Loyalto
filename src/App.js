import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Genre from "./pages/Genre";
import Movies from "./pages/Movies";
import DetailMovies from "./pages/DetailMovies";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/genre" component={Genre} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/detail/:id" component={DetailMovies} />
      </Router>
    </div>
  );
}

export default App;
