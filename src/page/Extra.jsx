import Carta from "./Carta.jsx"
import Card from "./Card.jsx"
import { motion } from "framer-motion";

export default function Extra(){
    return (
        
        <div className="container mx-auto p-8">
            <motion.h1
                    className="text-4xl md:text-6xl font-bold text-red-700 drop-shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Contenido extra
                  </motion.h1>
                         
            <Carta
            imageSrc="../public/CARTALIONEL.png"
            altText="Maradelli"
            captionText="Lionel El Fenix Maradelli"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            
            /> 
            <Card/>
             
         <motion.p
          className="mt-6 text-lg md:text-l text-gray-200 max-w-2xl mx-auto leading-relaxed text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.0 }}
        >
        Maradelli combina la visión y pausa de Maradona con la velocidad mental y precisión de Messi. Tiene una zurda mágica, pero
        también es conocido por su capacidad para asistir con el exterior del pie derecho. Su cambio de ritmo en espacios reducidos
        y su capacidad para crear algo de la nada lo convierten en un jugador impredecible y letal.
        </motion.p>

       <motion.img
  src="/public/MaradelliGol.gif"
  className="mt-10 w-full max-w-md mx-auto shadow-2xl"
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 1, duration: 0.6 }}
  controls
/> 

        <motion.p
        className="mt-6 text-lg md:text-s text-gray-200 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.0 }}
        >
        Celebrando el gol de su debut soñado frente a Boca.
        </motion.p>  
        </div>
        
        
    )
}