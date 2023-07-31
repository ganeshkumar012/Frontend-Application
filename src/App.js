import Login from "./components/Login";
import './App.css'
import Second from "./components/Second";
import Third from "./components/Third";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/home'} element={<Second />} />
        <Route path={'/userDetails/:userId'} element={<Third />} />
      </Routes>
    </div>
  );
}

export default App;
