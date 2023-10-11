const express = require('express')
const router = express.Router()
const {body, param, validationResult} = require('express-validator')

const categoryController = require('../controllers/category.controller')

const idValidator = () => {
    return [
        param('id').isNumeric().withMessage('Id must be a number')
    ]
}

const updateValidator = () => {
    return [
        param('id').isNumeric().withMessage("Id must be a number"),
        body('id').isNumeric().withMessage("Id must be a number"),
        body('id').not().isEmpty().withMessage("Id is required"),
        body('name').isString().withMessage('Name must be a string'),
        body('name').not().isEmpty().withMessage("Name is required")
    ]
}

const nameValidator = () => {
    return [
        body('name').not().isEmpty().withMessage("The name field is required"),
        body('name').isString().withMessage('name field must be a string')
    ]
}

router.get('/', categoryController.findAll)
router.get('/:id', idValidator(), (req, res, next) => {
    const errors= validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            data: errors.array()
        })
    }
    next()
}, categoryController.findOne)
router.post('/', nameValidator(),  (req, res, next) => {
    const errors= validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            data: errors.array()
        })
    }
    next()
}, categoryController.create)
router.patch('/:id', updateValidator(), (req, res, next) => {
    const errors= validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            data: errors.array()
        })
    }
    next()
}, categoryController.update)
router.delete('/:id', idValidator(),  (req, res, next) => {
    const errors= validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            data: errors.array()
        })
    }
    next()
}, categoryController.delete)



module.exports = router
