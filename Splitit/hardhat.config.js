require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
const optimismGoerliUrl = process.env.ALCHEMY_API_KEY
  ? `https://opt-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
  : process.env.OPTIMISM_GOERLI_URL;
  
module.exports = {
  solidity: "0.8.4",
  networks: {
    scrollAlpha: {
      url: "https://alpha-rpc.scroll.io/l2" || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    "optimism-goerli": {
      url: optimismGoerliUrl,
      accounts: { mnemonic: process.env.MNEMONIC },
    },
  },
};


