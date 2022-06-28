# Mercado en línea de activos digitales impulsado por la tecnología Blockchain

Este es un repositorio de código abierto que contiene una implementación básica de un mercado en línea de activos digitales que se puede ejecutar en un entorno de prueba. Para este caso en específico se pueden cargar imágenes que posteriormente se pueden comerciar en el Marketplace, el cual es una aplicación web, pero asimismo permite comunicarse con una Blockchain de segunda generación en este caso Ethereum que permite manejar los pagos y el traspaso de los activos digitales representados por NTFS. Adicionalmente se utiliza IPFS el cual es un protocolo punto a punto que permite alojar la información y archivos de forma distribuida y permanente.
En el Marketplace se pueden tranzar imágenes que representen un activo de la vida real, o cualquier pieza de arte digital, únicamente utilizando una cartera electrónica que tenga un cuenta de Ethereum.

El desarrollo del sistema se realizo en etapas utilizando la metodología de desarrollo de proyectos agiles scrum.

**Enlace del proyecto:**

- [Repositorio de código abierto ](https://github.com/AstorAyestas/nft-marketplace-hn)

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

- [ethers documentación ](https://docs.ethers.io/v5/)
- [hardhat documentación ](https://hardhat.org/)
- [reactjs documentación ](https://es.reactjs.org/)
- [ipfs documentación ](https://ipfs.io/)
- [Fullstack marketplace tutorial ](https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb)
- [ethereum documentación ](https://ethereum.org/en/)
- [nextjs documentación ](https://nextjs.org/)
