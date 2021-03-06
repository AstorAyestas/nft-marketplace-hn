/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
    sources: "./src/contracts",
    cache: "./src/cache",
    tests: "./src/test",
  },
};
