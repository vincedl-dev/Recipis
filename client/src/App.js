import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";

import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

import Login from './components/login'
import Signup from './components/signup'
import Home from "./components/Home";
import axios from 'axios'
import UserRecipe from "./components/UserRecipe";
import RecipeDetails from "./components/ReipeDetails";
import { useSelector } from "react-redux";
import Header from "./components/Navigation/Header";

import SearchPage from "./components/SearchPage"
import PageNotFound from "./components/PageNotFound";
import './App.css'

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
  const token = useSelector(state=>state.user.logintoken)

  return (

    <ThemeProvider theme={theme}>
      <Router>
        {
        token && <Header />
        }
    
          <Routes>  

          <Route exact path="/" element={<Navigate to="/login" replace />} />
          <Route exact path="/home" element={token ? <Home /> : <Navigate to="/login" replace  />  } />
          <Route exact path="/login" element={token ? <Navigate to="/home"  replace/> : <Login /> }/>
          <Route exact path="/signup"  element={token ? <Navigate to="/home"  replace/> : <Signup /> } />
          <Route exact path="/user/recipes" element={token ? <UserRecipe /> : <Navigate to="/login"  replace/> } />
          <Route  exact path='/recipe/search/:title' element={token ? <SearchPage /> : <Navigate to="/login"  replace/> } /> 
          <Route  exact path="/recipe/:id"element={token ? <RecipeDetails /> : <Navigate to="/login"  replace/> } /> 
         

          <Route path="*" element={<PageNotFound />}></Route>
          {/* <Route path="/recipe/user" element={<UserRecipe />} /> */}

       
          </Routes>
   
      </Router>
    </ThemeProvider>
  );
}

export default App;
