require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/cdFjloa8MvZ9d20x-7LVMlydaqrdWADD',
      accounts: ['522b47c4508934a40a643f548de214af60e74c3b71700e6ee544a5406fff4bd9']
    }
  }
}