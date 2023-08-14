const getTransactionsByID = require('./getTransactionById.js')
const getTransactions = require('./getTransactions.js')
const createWalletOrGetWallet = require('./getWalletDetails.js')
const airDrop = require('./getAirdrop.js')
const initiateTransaction = require('./startTransaction.js')
const initiateTransactionExternal = require('./startTransactionExternal.js')
const transferGariToken = require('./transferGariToken.js')
const transferGariTokenExternal = require('./transferTokenExternal.js')
const { sdkInitialize } = require('./sdkInitialize.js')
const { getDecodedTransction } = require('./garihelper.js') 
const {partialSign} = require('./garihelper.js')
const {verifyPublicKey} = require('./garihelper.js')

const {packageVersion} = require('./config.js')

module.exports = {
    // backend and frontend common methods
    sdkInitialize,
    packageVersion,
    getDecodedTransction,
    partialSign,
    verifyPublicKey,

    // backend methods
    airDrop,
    initiateTransaction,
    initiateTransactionExternal,
    getTransactionsByID,
    getTransactions,

    // frontend methods
    createWalletOrGetWallet,
    transferGariToken,
    transferGariTokenExternal
}