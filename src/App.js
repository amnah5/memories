import React from "react";
import "./App.css";
import Home from "./components/Home";
import ProductsList from "./components/ProductList";
import memories from "./Memories";

function App() {
  return (
    <div>
      <Home />
      <ProductsList products={memories} />
    </div>
  );
}

export default App;
