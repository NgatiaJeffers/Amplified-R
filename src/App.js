import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TimersDashboard from "./components/TimersDashboard";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<TimersDashboard />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

