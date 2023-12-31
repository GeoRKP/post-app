const postService = require('../services/post.services')
const {dataSource} = require("../connect");

exports.findAll = async (req, res) => {
    console.log("Find all posts")

    try {
        const result = await postService.findAll()
        res.status(200).json({status: true, data: result})
        console.log("Success in finding posts")
    } catch (err)  {
        res.status(400).json({status: false, data: err})
        console.log("Error in finding all posts")
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    console.log("Find post with id: ", id)
    try {
        const result = await postService.findOne(id)
        res.status(200).json({status: true, data: result})
        console.log("Success in finding post")
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Error in finding post")
    }
}

exports.create = async (req, res) => {
    const data = req.body
    console.log("Insert post ", data.title)

    try {
        const result = await postService.create(data)
        res.status(200).json({status: true, data: result})
        console.log("Success in saving post", data)
    }catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Error in creating post", err)
    }
}

exports.updatePost = async (req, res) => {
    const id = req.params.id
    console.log("Update post with id", id)


    try {
        const result = await postService.updatePost(req.body)
        res.status(200).json({status: true, data: result})
        console.log("Success in updating post", req.body)
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Error in updating post", err)
    }
}

exports.updateCategory = async (req, res) => {
    const id = req.params.id
    console.log("Update post category")

    try {
        const result = await postService.updatePost(req.body)
        res.status(200).json({status: true, data: result})
        console.log("Success in updating post category", req.body)
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Error in updating post category", err)
    }
}

exports.deletePost = async (req, res) => {
    const id = req.params.id
    console.log("Delete post")

    try {
        const result = await postService.deletePost(id)
        res.status(200).json({status: true, data: result})
        console.log("Success in deleting post", req.body)
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Error in deleting post", err)
    }
}

exports.deleteCategories = async (req, res) => {
    const id = req.params.id
    console.log("Delete post category")

    try {
        const result = await postService.deleteCategories(req.body)
        res.status(200).json({status: true, data: result})
        console.log("Success in deleting post categories", req.body)
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Error in deleting post categories", err)
    }
}
