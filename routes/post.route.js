const express = require('express')
const router = express.Router()

const {body, param, validationResult} = require('express-validator')
const postController = require('../controllers/post.controller')

const textAndTitleValidator = () => {
    return [
        body('title').not().isEmpty().withMessage('The field is required'),
        body('title').isString().withMessage('The field must be a string'),
        body('text').not().isEmpty().withMessage('The field is required'),
        body('text').isString().withMessage('The field must be a string')
    ]
}


router.get('/:id', postController.findOne)
router.get('/', postController.findAll)
router.post('/', textAndTitleValidator(),   (req, res, next) => {
    const errors= validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            data: errors.array()
        })
    }
    next()
}, postController.create)
router.patch('/:id', postController.updatePost)
router.patch('/:id/category', postController.updateCategory)
router.delete(':id', postController.deletePost)
router.delete('/:id/categories', postController.updateCategory)


module.exports = router
