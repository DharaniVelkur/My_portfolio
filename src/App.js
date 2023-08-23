import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
     <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/skills" element={<Resume/>}/>
          <Route exact path="/projects" element={<Project/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
