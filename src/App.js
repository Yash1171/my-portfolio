import Navbar from "./Components/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experiences from "./Components/Experiences/Experiences";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testinomials from "./Components/Testinomials/Testinomials";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style= {{
        background : darkMode? 'black': '',
        color : darkMode? 'white': ''
      }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experiences/>
      <Works/>
      <Portfolio/>
      <Testinomials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
