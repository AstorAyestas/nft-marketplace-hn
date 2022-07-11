import { useMetaMask } from "metamask-react";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky h-16 px-4 text-blueTurquoise-500 ">
      <nav className="flex items-center justify-between h-16">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-5">
          <li>
            <Link href="/collection">
              <a>Mis compras</a>
            </Link>
          </li>
          <li>
            <Link href="/upload">
              <a className="px-4 py-1 font-bold text-white border rounded border-blueTurquoise-700 bg-blueTurquoise-500 hover:bg-blueTurquoise-700">
                Crear
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
