import React from 'react';
import styled from 'styled-components';



    const carta = [
    
      { title: 'Habilidades Destacadas', habilidad: ["Regate Imposible (99 en FIFA)","Velocidad de 30 km/h registrada","Ambidiestro perfecto"]
      },
      { title: 'Records', habilidad: ["Jugador más joven en marcar hat-trick en un clásico argentino (17 años)","Más asistencias en una temporada de Primera (35)","Único jugador en ganar Balón de Oro Sub-20 y Sub-17"]
      },
     
];

const Card = () => {


    const listItems = carta.map(cart =>
      <div className="card">
        <div className="bg">     
           <h3 className="text-xl text-white font-semibold mb-3">{cart.title}</h3>
        <ul className="list-disc text-white pl-6 space-y-2">
            <li>
            {cart.habilidad[0]}
            </li>
            <li>
            {cart.habilidad[1]}
            </li>
            <li>
            {cart.habilidad[2]}
            </li>
        </ul>
        </div>

        <div className="blob" />
      </div>
    
  

  );
  return (
    <StyledWrapper>
      <div className='flex gap-80 p-30'>
          {listItems}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
.card {
    position: relative;
    width: 289px;
    height: 250px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: scale(0.8); /* Reduce el tamaño sin modificar dimensiones */
}

.bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 280px;
    height: 240px;
    z-index: 2;
    background: url('/public/fon.jpg') center/cover no-repeat;
    backdrop-filter: blur(10px); /* Simula vidrio */
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid rgba(0, 0, 0, 0.3); /* Borde sutil */
    box-shadow: 0px 0px 30px rgba(255, 0, 0, 0.9), 0px 0px 50px rgba(255, 255, 255, 0.8); /* Resplandor neón */
    animation: glow 3s infinite alternate;
    perspective: 1000px; /* Profundidad para efecto 3D */
    transform-style: preserve-3d;
    transition: transform 0.5s ease-in-out;
}

.bg:hover {
    transform: rotateX(10deg) rotateY(10deg); /* Movimiento en 3D */
}

/* Animación de resplandor neón */
@keyframes glow {
    0% {
        box-shadow: 0px 0px 30px rgb(255, 0, 0), 0px 0px 50px rgba(202, 0, 0, 0.57);
    }
    50% {
        box-shadow: 0px 0px 40px rgb(255, 255, 255), 0px 0px 60px rgba(233, 0, 0, 0.8);
    }
    100% {
        box-shadow: 0px 0px 20px rgba(255, 0, 149, 0.9), 0px 0px 50px rgba(255, 0, 0, 0.7);
    }
}

/* Reflejos avanzados */
.bg::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 0, 0, 0.1));
    opacity: 0.5;
    mix-blend-mode: overlay;
}

/* Partículas flotantes */
.bg::before,
.bg::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: #ff0000;
    border-radius: 50%;
    animation: particles 6s infinite ease-in-out;
}

/* Movimiento de partículas */
@keyframes particles {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    50% { transform: translate(50px, -50px) scale(1.5); opacity: 0.6; }
    100% { transform: translate(-50px, 50px) scale(1); opacity: 1; }
}


/* Efecto Glitch */
@keyframes glitch {
    0% { transform: translate(0, 0); }
    20% { transform: translate(-5px, 3px); text-shadow: -2px -2px rgba(255, 0, 0, 0.8); }
    40% { transform: translate(5px, -3px); text-shadow: 2px 2px rgba(255, 0, 55, 0.8); }
    60% { transform: translate(-3px, 1px); text-shadow: -2px -2px rgba(0, 0, 255, 0.8); }
    100% { transform: translate(0, 0); }
}

.glitch-text {
    animation: glitch 0.2s infinite;
}

}`;


export default Card;
