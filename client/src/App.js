import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import SidebarMenu from './Components/SidebarMenu';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<SidebarMenu page={<Home />} />}></Route>
        </Routes>
    </div>
  );
}

export default App;
