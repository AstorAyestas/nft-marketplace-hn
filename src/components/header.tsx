import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky h-16 px-4 text-blueTurquoise-500 ">
      <nav className="flex h-16 items-center justify-between">
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
              <a className="rounded border border-blueTurquoise-700 bg-blueTurquoise-500 py-1 px-4 font-bold text-white hover:bg-blueTurquoise-700">
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
