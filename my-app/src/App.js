import "./App.css";
// import logo from "./logo.png";
import Mockman from 'mockman-js';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>This is a heading.</h1>
      <Routes>
        <Route path='/mockman' element={<Mockman />} />
        <Route path='/randompath' element={<h1>This is a random path.</h1>} />
      </Routes>
    </div>
  );
}

export default App;
