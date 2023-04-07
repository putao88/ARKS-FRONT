import Web3 from 'web3'

export const getAccounts = new Promise(function (resolve, reject) {
  if (window.ethereum) {
    var web3 = new Web3(window.web3.currentProvider)
    web3.eth.getAccounts((err, fromAddress) => {
      if (err) {
        reject(new Error('Unable to retrieve address'))
      } else {
        resolve({ address: fromAddress[0] })
      }
    })
  } else {
    alert('Please install MetaMask wallet')
    reject(new Error('Unable to connect to Metamask'))
  }
})

export const connectWeb3 = new Promise(function (resolve, reject) {
  // Check for injected web3 (mist/metamask)
  if (window.ethereum) {
    window.ethereum.enable().then((res) => {
      var web3 = new Web3(window.web3.currentProvider)
      resolve({
        web3 () {
          return web3
        },
      })
    })
  } else {
    alert('Please install MetaMask wallet')
    reject(new Error('Unable to connect to Metamask'))
  }
})
  .then(result => {
    return new Promise(function (resolve, reject) {
      result.web3().eth.getAccounts((err, fromAddress) => {
        if (err) {
          reject(new Error('Unable to retrieve address'))
        } else {
          result = Object.assign({}, result, { address: fromAddress[0] })
          resolve(result)
        }
      })
    })
  })
  // .then(result => {
  //   return new Promise(function (resolve, reject) {
  //     result.web3().eth.getBalance((err, balance) => {
  //       if (err) {
  //         reject(new Error('Unable to retrieve balance for address'))
  //       } else {
  //         result = Object.assign({}, result, { balance })
  //         resolve(result)
  //       }
  //     })
  //   })
  // })
