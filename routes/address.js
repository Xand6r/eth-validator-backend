/**
 * @description Routes concerning all things addresses e.g validate
 */
const express = require('express')
const router = express.Router()
const { celebrate, Joi } = require('celebrate')

const AddressService = require('../services/addressService')
const addressService = new AddressService()

/**
 * An endpoint used to confirm the validity of an ethereum address
 */
router.use(
    '/validate',
    celebrate({
        body: Joi.object({
            address: Joi.string().required(),
        }),
    }),
    function (req, res) {
        try {
            // fetch parameter from request
            const { address } = req.body
            // save request into database
            const isValidAddress = addressService.isAddressValid(address)
            // return response gotten
            res.send({ success: true, value: isValidAddress })
        } catch (err) {
            return res.send({ success: false, error: err.message })
        }
    }
)

module.exports = router
