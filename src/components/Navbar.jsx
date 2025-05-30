import { motion } from "framer-motion";
import {Link} from 'react-router';

export default function Navbar() {
    return (
        
    
      <nav className="bg-white p-4">
            <ul className="flex space-x-6 text-black justify-center gap-20">
                <li>
                <Link to="/"
                className="hover:text-red-600">Inicio</Link>
                </li>
                <li>
                <Link to="/Biografia"
                className="hover:text-red-600">Biografia</Link>
                </li>
                <li>
                <Link to="/Extra"
                className="hover:text-red-600">Extra</Link>
                </li>

            </ul>
        </nav>
    )
}
