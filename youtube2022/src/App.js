import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./page/home/Home";
import Hotels from "./page/hotels/Hotels";
import List from "./page/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/hotels"element={<List />}/>
        <Route path="/hotels/:id"element={<Hotels />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
