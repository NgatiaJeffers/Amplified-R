import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductList from './components/product/ProductList';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<ProductList />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
