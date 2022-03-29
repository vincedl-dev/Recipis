
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Note from './pages/Note'
import Create from './pages/Create'
import './App.css';
import {createTheme,ThemeProvider} from '@material-ui/core/styles'
const theme = createTheme({
  palette:{
    primary:{
      main:'#000000'
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Note />} />
        <Route  path="/create"element={<Create />} />
        </Routes>
     
  </BrowserRouter>


  </div>
  </ThemeProvider>
  );
}

export default App;
