
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

require("./tasks/task")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",


    viaIR: true,
    settings: {
      optimizer: {

        enabled: true,
        runs: 200
      }, outputSelection: {
        "*": {
          "*": ["evm.assembly", "irOptimized"],
        }
      }
    }
  },

  defaultNetwork: "BSCTest",
  networks: {
    hardhat: {

    },
    BSCTest: {
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: ["2c9ca0a2277b1d7f93833d58d3bcd4f38fb760460930d9e20a0c232715961a41"],

    },
  },
  etherscan: {
    apiKey: "TNE79NC94WUWQ3FZZ3NVBG9DUQ32AW77GB",
  }
};

// "*":{
//   "*":["evm.assembly","irOptimized"],
// }
