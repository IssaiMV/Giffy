import { Route, Link } from "wouter";
import "./App.scss";
import ListOfGifs from "./components/ListOfGifs.jsx";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/Chopper">Chopper</Link>
        <Link to="/gif/Mapache">Mapache</Link>
        <Link to="/gif/Gatos">Gatos</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}
