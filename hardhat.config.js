// require('@nomiclabs/hardhat-ethers');
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const {API_URL, PRIVATE_KEY} = process.env;
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
