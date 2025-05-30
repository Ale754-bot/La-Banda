import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlurText from "./BlurText";
import LogosClubes from "../components/LogosClubes.jsx";



const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Inicio() {
  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      {/* Fondo con imagen desenfocada */}
      <div className="absolute inset-0 bg-[url('/public/file_000000002fb461f8a0a79ee311c2983d.png')] bg-cover bg-center opacity-30 blur-sm z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-red-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Lionel “El Fénix” Maradelli
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Promesa del fútbol argentino. Una mezcla de pasión, talento y resurrección. Con raíces en La Matanza y destino en el Camp Nou.
        </motion.p>

        <motion.img
  src="/public/MARAURA.gif"
  className="mt-10 w-full max-w-md mx-auto shadow-2xl"
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 1, duration: 0.6 }}
  controls
/>

        {/* Botón de navegación */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          
        </motion.div>
        <LogosClubes/>
         <BlurText
  text="Nacido en un barrio humilde del conurbano bonaerense, Lionel Maradelli creció en un entorno que mezclaba pasión futbolera, carencias y sueños.
  Criado solamente por su madre tras la muerte de su padre cuando el tenia solo 5 años. Jugaba descalzo en las calles de tierra con una pelota hecha de trapo, como lo hicieron sus idolos: Messi y Maradona.
  "
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
/>
   <BlurText
  text="Desde pequeño, todos lo conocian como como el niño que juega con fuego en los pies. A los 7 años fue reclutado por una escuelita afiliada a River Plate tras ser visto en un torneo barrial.
  "
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed text-center"
/>
<br />
<br />
<Link
  to="/biografia"
  className="bg-red-600 hover:bg-red-600 transition text-white px-6 py-3 rounded-full text-lg font-medium shadow-md"
          >
            Ver biografía completa
</Link>
      </div>
     
    </div>
  );
}