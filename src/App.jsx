import { Route, Link } from "wouter";
import "./App.scss";
import Home from "./pages/Home/";
import SearchResult from "./pages/SearchResult/";
import Detail from "./pages/Details/";

import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
export default function App() {
  return (
    <StaticContext.Provider value={{ name: "Issai Mendoza", mostrar: true }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>App</h1>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResult} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
