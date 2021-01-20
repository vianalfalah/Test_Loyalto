import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Genre from "./pages/Genre";
import Movies from "./pages/Movies";
import { Provider } from "react-redux";
import store from "./redux/store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" component={Landing} />
          <Route path="/genre" component={Genre} />
          <Route path="/movies" component={Movies} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
