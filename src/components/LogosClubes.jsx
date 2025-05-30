import { motion } from "framer-motion";

export default function LogosClubes() {
  const logos = [
    { src: "/public/RIVER.png", alt: "River Plate" },
    { src: "/public/ARGENTINA.png", alt: "Selección Argentina" },
    { src: "/public/BARCELONA.png", alt: "FC Barcelona" },
  ];

  return (
    <motion.div
      className="flex justify-center items-center gap-10 flex-wrap py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {logos.map((logo, index) => (
        <motion.img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-14 md:h-16 opacity-80 grayscale hover:grayscale-0 transition duration-300 hover:scale-110"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        />
      ))}
    </motion.div>
  );
}