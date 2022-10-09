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
import Footer from "./Components/Footer/Footer";
import PrivateRoutes from "./Components/Routes/private-route";


function App() {

  return (
      <div className="App">
        <AuthContextProvider>
          <Routes>
             <Route path='/' element={<Navigation />} >
              <Route index element={<Home />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route element={<PrivateRoutes/>}>
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/choose-your-weather' element={<ChooseYourWeather />} />
              </Route>
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<ErrorPage />} />
            </Route>
          </Routes>
        </AuthContextProvider>
          <Footer/>
      </div>
  );
}

export default App;