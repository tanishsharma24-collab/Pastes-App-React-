import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full h-14 bg-gray-800 flex items-center justify-center gap-10 shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold text-lg" : "text-gray-300 text-lg hover:text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/pastes"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold text-lg" : "text-gray-300 text-lg hover:text-white"
        }
      >
        Pastes
      </NavLink>
    </div>
  );
};

export default Navbar;