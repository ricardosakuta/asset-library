import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import NewAsset from './Pages/NewAsset';
import SidebarMenu from './Components/SidebarMenu';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<SidebarMenu page={<Home />} />}></Route>
        <Route path="/newasset" element={<SidebarMenu page={<NewAsset />} />}></Route>
        </Routes>
    </div>
  );
}

export default App;
