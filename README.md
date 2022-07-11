# Mercado en línea de activos digitales impulsado por la tecnología Blockchain

Este es un repositorio de código abierto que contiene una implementación básica de un mercado en línea de activos digitales que se puede ejecutar en un entorno de prueba. Para este caso en específico se pueden cargar imágenes que posteriormente se pueden comerciar en el Marketplace, el cual es una aplicación web, pero asimismo permite comunicarse con una Blockchain de segunda generación en este caso Ethereum que permite manejar los pagos y el traspaso de los activos digitales representados por NTFS. Adicionalmente se utiliza IPFS el cual es un protocolo punto a punto que permite alojar la información y archivos de forma distribuida y permanente.
En el Marketplace se pueden tranzar imágenes que representen un activo de la vida real, o cualquier pieza de arte digital, únicamente utilizando una cartera electrónica que tenga un cuenta de Ethereum.

El desarrollo del sistema se realizo en etapas utilizando la metodología de desarrollo de proyectos agiles scrum.

## Imágenes

**Página donde se crean los activos digitales**

<img width="388" alt="nft marketplace crear" style="margin-right:10px" src="https://user-images.githubusercontent.com/90588076/178179884-850842e3-b0fb-4979-8e2e-b8e5fc43983f.png">

**Página donde se listan todos los activos digitales disponibles de venta**

<img width="676" alt="nft marketplace home" style="margin-right:10px" src="https://user-images.githubusercontent.com/90588076/178179891-e475a47f-2c49-433c-8c18-2f880748f19b.png">

**Página donde se listan todos los activos dititales del usuario que tiene conectada la cartera**

<img width="674" alt="nft marketplace mis compras" style="margin-right:10px" src="https://user-images.githubusercontent.com/90588076/178179900-60f07958-e9b0-40bd-a281-6a36ba767639.png">

**Acción donde se ponen en venta los activos digitales ya adquiridos por el usuario que tiene contectada la cartera**

<img width="380" alt="nft marketplace poner en venta" style="margin-right:10px" src="https://user-images.githubusercontent.com/90588076/178179907-0fbbb1bb-b3e0-45cc-a53c-a5f568e23ab3.png">

**Enlace del proyecto:**

- [Repositorio de código abierto ](https://github.com/AstorAyestas/nft-marketplace-hn)

## Teoría

¿Qué es un token no fungible? Fungible significa ser igual o intercambiable, por ejemplo, Eth es fungible. Con esto en mente, los NFT son únicas; cada uno es diferente. Cada token tiene características y valores únicos. Todos son distinguibles entre sí y no son intercambiables.

¿Qué es ERC-721? ERC-721 es un estándar abierto que describe cómo construir tokens no fungibles en cadenas de bloques compatibles con EVM (Ethereum Virtual Machine); es una interfaz estándar para tokens no fungibles; tiene un conjunto de reglas que facilitan el trabajo con NFT. Antes de continuar. [Especificación](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721)

## Tecnologías utilizadas

**Aplicación principal.**
Dicho proyecto es una aplicación web bajo la arquitectura cliente servidor que se encarga de desplegar la interfaz del usuario, manejar la interacción del usuario con la plataforma y así mismo por medio de librerías comunicarse con la Blockchain Ethereum de prueba para realizar las transacciones y realizar autenticación mediante una billetera.
Las herramientas utilizadas para desarrollar la aplicación antes mencionada son las siguientes:

**Cliente:**

- React: Una biblioteca de JavaScript para construir interfaces de usuario.
- Next: Un marco de trabajo basado en React que aumenta la productividad y experiencia de desarrollo.
- Tailwind css: Un marco de trabajo de CSS que permite estilizar interfaces de usuario basado en utilidades.
- React-hook-form: Una librería de React que permite manejar formularios de forma eficiente.

**Servidor:**

- NodeJS: entorno de ejecución del lenguaje de programación Javascript en el servidor.
- Express: Librería que permite crear un servidor http, servir contenido y manejar peticiones.

**Las siguientes herramientas son las utilizadas para la interacción con la Blockchain de segunda generación Ethereum.**

Las herramientas que se utilizaron para desarrollar el contrato inteligente encargado de la lógica de la transaccionalidad del Marketplace:

- Solidity: Es un lenguaje de programación orientado a objetos para escribir contratos inteligentes.
- Openzeppelin/contracts: Librería de contratos inteligentes.
  Las siguientes herramientas son las que permiten crear un entorno de desarrollo de contratos inteligentes, asimismo crear un puente de comunicación para que estos puedan ser utilizados en aplicaciones web tradicionales.
- Web3modal: Permite conectar la billetera y cuanta de usuario a la Blockchain de Ethereum para interactuar con el contrato inteligente.
- Hardhat: Permite crear un entorno de desarrollo de Blockchain Ethereum.
- IPFS: Un protocolo hipermedia punto apunto diseñado para alojar información de forma descentralizada.
- Ethersjs : Una biblioteca de javascript completa y compacta que permite interactuar con Ethereum Blockchain y su ecosistema.

## Ejecutar el proyecto localmente

Clonar el proyecto

```bash
  git clone https://github.com/AstorAyestas/nft-marketplace-hn
```

Ir al directorio del proyecto

```bash
  cd nft-marketplace-hn
```

Instalar las dependencias

```bash
  npm install
```

Iniciar el proyecto

```bash
  npm run dev-blockchain-restart
  npm dev-blockchain
  npm deploy-to-dev-blockchain
  npm run dev
```

## Ejecutar pruebas

Para ejecutar las pruebas es necesario ejecutar la siguiente instrucción

```bash
  npm run test
```

## Autor

- [@astorayestas](https://www.github.com/astorayestas)

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

## Referencias del proyecto

Este proyecto fue desarrollado usando la siguiente documentación.

- [Ethers documentación](https://docs.ethers.io/v5/)
- [Hardhat documentación](https://hardhat.org/)
- [Reactjs documentación](https://es.reactjs.org/)
- [IPFS documentación](https://ipfs.io/)
- [Fullstack marketplace tutorial](https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb)
- [Documentación Ethereum](https://ethereum.org/en/)
- [Documentación nextjs](https://nextjs.org/)
