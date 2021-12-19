import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App  from "./App";

import { FavouritesContexProvider } from "./store/favourites-context";

ReactDOM.render(
  <FavouritesContexProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContexProvider>,

  document.getElementById("root")
);
