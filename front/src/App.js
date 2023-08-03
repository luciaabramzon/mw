
import Academia from "./components/Academia";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Images from "./components/Images";
import NavBar from "./components/Nav";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <>
    <Nav/>
    <Academia id='academia'/>
    <Images id='galeria'/>
    <Services id='servicios'/>
    <Contact id='contacto'/>
    <Footer/>
    </>
  );
}


export default App;
