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
        <Route path="/" component={Landing} />
        <Route path="/genre" component={Genre} />
        <Route path="/movies" component={Movies} />
        <Route path="/detail" component={DetailMovies} />
      </Router>
    </div>
  );
}

export default App;
