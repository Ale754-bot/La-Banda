import './App.css'
import {Routes, Route} from 'react-router';
import Navbar from './components/Navbar.jsx';
import Biografia from './page/Biografia.jsx';
import Extra from './page/Extra.jsx';
import Inicio from './page/Inicio.jsx';
import RotatingText from './RotatingText'
import { motion } from "framer-motion";
import Redes from './page/Redes.jsx';
import Bienvenida from './page/Bienvenida.jsx';



function App() {

  return (

   <>

  <Redes/>
        <motion.div 
           
        className="absolute top-20 h-1 w-1/4 bg-red-500 shadow-lg"
        animate={{ x: [0, "260%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    <RotatingText
  texts={['BIENVENIDOS', 'A', 'LA BANDA']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-black text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
 
      <div className="min-h-screen bg-black/90" >
      
      
        <Navbar />
     
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/Inicio"
          element={<Inicio />} />
          <Route path="/Biografia"
          element={<Biografia />} />
          <Route path="/Extra"
          element={<Extra />} />
      </Routes>
    
      
      
      </div>
      
    </>
  )
  }

export default App
