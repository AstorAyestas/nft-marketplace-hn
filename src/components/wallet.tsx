import { useMetaMask } from "metamask-react";
import React from "react";

const Wallet = () => {
  const { status, connect, account } = useMetaMask();

  return (
    <section className="relative w-full overflow-hidden rounded-md shadow-md">
      <img
        className="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="Cover image"
      />

      <div className="absolute top-0 left-0 px-6 py-4">
        <h4 className="mb-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          NFT Marketplace de prueba
        </h4>
        <p className="text-xl font-bold leading-normal text-white sm:text-2xl">
          Descubra, coleccione y venda extraordinarios NFTS de arte y cultura de
          Honduras 🇭🇳
        </p>

        <div className="my-4">
          {status === "unavailable" ? (
            <p className="text-sm font-bold leading-normal text-white sm:text-base">
              No tiene Metamask instalado en su navegador, favor instalar antes
              de utilizar esta aplicación siguiendo el siguiente enlace:
              <a
                className="ml-2 text-blue-500 underline"
                target="_blank"
                href="https://metamask.io/"
                rel="noopener noreferrer"
              >
                Metamask
              </a>
            </p>
          ) : status === "connected" ? (
            <p className="text-lg font-bold leading-normal text-white sm:text-xl">
              Cuenta: {account.slice(0, 5) + "..." + account.slice(38, 42)}
            </p>
          ) : (
            <button
              onClick={connect}
              className="px-4 py-2 font-bold text-white border rounded border-blueTurquoise-700 bg-blueTurquoise-500 hover:bg-blueTurquoise-700"
            >
              Conectar Wallet
            </button>
          )}
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Wallet;
