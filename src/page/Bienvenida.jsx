import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function Bienvenida() {
    const navigate = useNavigate();

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Video de fondo desenfocado */}
            <div className="absolute inset-0 overflow-hidden">
                <video 
                    className="w-full h-full object-cover blur-md brightness-75" 
                    autoPlay 
                    loop 
                    muted
                >
                    <source src="/public/MARADELLI2.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Partículas animadas */}
            <Particles 
                id="particles"
                init={particlesInit}
                options={{
                    particles: {
                        number: { value: 500 },
                        size: { value: 3 },
                        move: { speed: 2 },
                        color: { value: "#ff0000" },
                        opacity: { value: 0.7 },
                    }
                }}
                className="absolute inset-0 w-full h-full"
            />

            {/* Contenido principal */}
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                {/* Logotipo de River Plate */}
                <motion.img 
                    src="/public/RIVER.png" 
                    alt="River Plate Logo" 
                    className="w-32 h-32 mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.h1 
                    className="text-6xl font-extrabold drop-shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    ¡Bienvenidos a la Banda!
                </motion.h1>

                <motion.p 
                    className="text-xl mt-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Prepárate para conocer a Lionel "El Fenix" Maradelli.
                </motion.p>

                <motion.button 
                    onClick={() => navigate("/Inicio")}
                    className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    ¡Ingresar!
                </motion.button>
            </div>
        </div>
    );
}


export default Bienvenida;

