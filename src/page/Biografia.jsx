import { motion } from "framer-motion";

const timeline = [
  {
    year: "2005 - 2010",
    title: "Infancia y orígenes",
    description: `Nacido en La Matanza, Buenos Aires, creció en un entorno humilde. Desde chico mostró un talento inusual. Su madre lo crio sola y a los 7 años fue detectado por una escuelita afiliada a River.`,
    img: "/public/Maradelliniño.jpg",
  },
  {
    year: "2012 - 2022",
    title: "Inferiores y consolidación en River",
    description: `Leyenda en inferiores, fue conocido como "el chico que juega con fuego". A los 17 debutó en Primera contra Boca con un gol inolvidable. Su apodo 'El Fénix' nace de su capacidad de renacer ante la adversidad.`,
    img: "/public/file_00000000b3586230857b174ae30a26c1.png",
  },
  {
    year: "2024 - 2025",
    title: "Selección Argentina Sub-20",
    description: `En el Mundial Sub-20 fue la figura con 5 goles y 4 asistencias. Ganó el premio al Mejor Jugador Sub-20 y fue ovacionado por todo el país.`,
    img: "/public/file_000000000b2461f8ba10a483093498f7.png",
  },
  {
    year: "2026 y Futuro",
    title: "Rumores de Europa: FC Barcelona",
    description: `Barcelona confirmó su fichaje por 60 millones. Le reservaron el dorsal 10. Xavi dijo: “Con Maradelli, el Barça vuelve a soñar.”`,
    img: "/public/file_00000000451461f796a1233d3ff1119f.png",
  },
  {
    year: "Extras",
    title: "Curiosidades",
    description: `Fanático de Aimar, estudia historia del fútbol, tiene un tatuaje de un fénix y su hermana Cande también juega profesionalmente.`,
    img: "/public/file_00000000260c61f98496b2bb880c5422.png",
  },
];

export default function Biografia() {
  return (
    
    <div className="py-15 px-4 sm:px-8">

      
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-red-700 drop-shadow-lg p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Biografía de Lionel "El Fénix" Maradelli
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-16">
  {timeline.map((item, index) => (
    <motion.div
      key={index}
      className="flex flex-col md:flex-row items-center md:gap-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Imagen con animaciones avanzadas */}
      <motion.img
        src={item.img}
        alt={item.title}
        className="w-50 rounded-xl shadow-lg mx-auto"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.2,
        }}
        animate={{ opacity: [1, 0.8, 1] }}
        Transition={{ repeat: Infinity, duration: 1.5 }}
      />

      {/* Contenedor de texto con animación */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mt-4 md:mt-0 md:w-1/2 text-justify space-y-2"
      >
        {/* Título con efecto interactivo */}
        <motion.h3
          whileHover={{ scale: 1.1, color: "#FFD700" }}
          className="text-xl text-red-600 font-semibold"
        >
          {item.year} — {item.title}
        </motion.h3>

        {/* Descripción con animación de entrada */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-base leading-relaxed"
        >
          {item.description}
        </motion.p>
      </motion.div>
    </motion.div>
  ))}
</div>


      
      
    </div>
  );
}