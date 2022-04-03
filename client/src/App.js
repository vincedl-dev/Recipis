import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'
import Login from './components/login'
import Signup from './components/signup'
import Home from "./components/Home";
import axios from 'axios'
import UserRecipe from "./components/UserRecipe";
import RecipeDetails from "./components/ReipeDetails";
axios.defaults.withCredentials = true;
const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})



function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router>
        
          <Routes>  

          <Route path="/" element={<Notes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route  path="/create"element={<Create />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/layout" element={<Layout />} /> 
          <Route path="/recipe/:id" element={<RecipeDetails />} /> 

          {/* <Route path="/recipe/user" element={<UserRecipe />} /> */}

       
          </Routes>
   
      </Router>
    </ThemeProvider>
  );
}

export default App;
