/**
 * @description A service class which aims to contain methods relating to all actions regarding an address
 */
const Web3 = require('web3')

class AddresService {
    /**
     * A test function to validate if a passed-in ethereum address is correct
     * @param {String} string the address we want to validate against
     * @returns
     */
    isAddressValid(string) {
        const isValidAddress = Web3.utils.isAddress(string)
        return isValidAddress
    }
}

module.exports = AddresService
