import React, { Suspense } from "react";
import { Route, Link } from "wouter";
import "./App.scss";
import SearchResult from "./pages/SearchResult";
import Detail from "./pages/Details";

import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <StaticContext.Provider value={{ name: "Issai Mendoza", mostrar: true }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <h1>App</h1>
            </Link>
            <GifsContextProvider>
              <Route component={HomePage} path="/" />
              <Route component={SearchResult} path="/search/:keyword" />
              <Route component={Detail} path="/gif/:id" />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}
