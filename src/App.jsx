import './App.css'
import Header from'./components/Header/Header.jsx'
import Nav from'./components/Nav/Nav.jsx'
import About from'./components/About/About.jsx'
import Experience from'./components/Experience/Experience.jsx'
import Contact from'./components/Contact/Contact.jsx'
import Footer from'./components/Footer/Footer.jsx'
import Portfolio from './components/Portfolio/Portfolio'
function App() {
  return(
  <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </>
  )
}

export default App
