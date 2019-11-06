const router = require('express').Router()
const {Checkout} = require('../db/models/checkout')

// router.get('/', async (req, res, next) => { // instead of accessing /:id, incorporate sessions
//     try {
//         const id = req.params.id
//         const user = await Checkout.findById(id)
//         if (user) {
//             // if this user exists, i want to access their current shopping experience
//         } else {
//             res.status(404).send('Our site is currently experiencing a problem. We apologize for any inconvenience. Please check back later or email us to let us know about the issue.')
//         }
//     } catch (error) {
//         next(error)
//     }
// })

// router.put('/', async (req, res, next) => {

// })

// router.delete('/', async (req, res, next) => {

// })

module.exports = router
