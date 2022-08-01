import { Route, Routes } from "react-router-dom";
import './App.css';
import AuthContextProvider from "./Context/AuthContext/AuthContext";
import Navigation from "./Components/Navigation/navigation-component";
import Home from "./Pages/Homepage/home";
import SignUp from "./Pages/Sign Up/signUp";
import SignIn from "./Pages/Sign In/signIn";
import Profile from "./Pages/Profile/profile.page";
import Contact from "./Pages/Contact/contact";
import ChooseYourWeather from "./Pages/Choose your weather/chooseYourWeather";
import ErrorPage from "./Pages/Errorpage/error.page";


function App() {

  return (
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Navigation />} >
              <Route index element={<Home />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/choose-your-weather' element={<ChooseYourWeather />} />
              <Route path='*' element={<ErrorPage />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </div>
  );
}

export default App;