/**
 * The test file for the addre
 */
const expect = require('chai').expect
const AddressService = require('../services/addressService')

describe('addressService()', function () {
    let addressService
    beforeEach(() => {
        addressService = new AddressService()
    })

    it('It should validate a correct address', function () {
        // define key variables
        const CORRECT_ADDRESS = '0x14c0157f9eEA7AEe61ba2606E75716E210b4697a'
        // compute
        const addressIsCorrect = addressService.isAddressValid(CORRECT_ADDRESS)
        // assert
        expect(addressIsCorrect).to.be.true
    })

    it('It should invalidate an incorrect address', function () {
        // define key variables
        const INCORRECT_ADDRESS = '0XINCORRECTADDRESS'
        // compute
        const addressIsCorrect =
            addressService.isAddressValid(INCORRECT_ADDRESS)
        // assert
        expect(addressIsCorrect).to.be.false
    })
});

