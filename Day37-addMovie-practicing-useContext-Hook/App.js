import React from "react";
import Nav from "./Nav";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <div>
      <MovieProvider>
        <Nav />
        <main>
          <AddMovie />
          <MovieList />
        </main>
      </MovieProvider>
    </div>
  );
}

export default App;
