
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Note from './pages/Note'
import Create from './pages/Create'
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Note />} />
        <Route  path="/create"element={<Create />} />
        </Routes>
     
  </BrowserRouter>
  </div>
  );
}

export default App;
