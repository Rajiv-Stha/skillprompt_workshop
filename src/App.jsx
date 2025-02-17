import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Aboutme from "./components/aboutMe/Aboutme";
import Projects from "./components/projects/Projects";

const App = () =>{
  return (
  <>
  <div id="hero">

  <Navbar/>
  <Aboutme/>
  <Projects/>
  </div>
  </>
  )
}
export default App;