import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-verify";

require('dotenv').config()

const deployerPrivateKey = process.env.PRIVATE_KEY ?? "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    glide: {
      url: `https://rpc-api.glideprotocol.xyz`,
      chainId: 901,
      accounts: [deployerPrivateKey],
    },
  },
  etherscan: {
    apiKey: {
      // Is not required by blockscout. Can be any non-empty string
      'glide': "empty"
    },
    customChains: [
      {
        network: "glide",
        chainId: 901,
        urls: {
          apiURL: "https://blockchain-explorer.glideprotocol.xyz/api",
          browserURL: "https://blockchain-explorer.glideprotocol.xyz",
        }
      }
    ]
  }
};

export default config;
