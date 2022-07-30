// truffle-config.js
const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
     privateKeys: ['eb0791f8dc7ded3e9b22cf01b6ceefc18103392e1a6af11e0fca7f9686b9b5a5'],
     providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
});
module.exports = {
     networks: {
          bsc: {
               // production
          },
          binanceTestnet: {
               provider: () => provider,
               network_id: "97",
               gas: 1000000,
               skipDryRun: true
          }
     },
     compilers: {
          solc: {
               version: "0.8.3"
          }
     }
}