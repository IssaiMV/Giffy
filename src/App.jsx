import { Route, Link } from "wouter";
import "./App.scss";
import Home from "./pages/Home/";
import SearchResult from "./pages/SearchResult/";
import Detail from "./pages/Details/";
export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1>App</h1>
        </Link>
        {/* <Link to="/search/Chopper">Chopper</Link>
          <Link to="/search/Mapache">Mapache</Link>
          <Link to="/search/Gatos">Gatos</Link> */}
        <Route component={Home} path="/" />
        <Route component={SearchResult} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
  );
}
