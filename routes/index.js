/**
 * @description Routes for the base url
 */

var express = require('express')
var router = express.Router()

router.use('/', function (req, res, next) {
    res.render('index', { title: 'validEth working well' })
})

module.exports = router
