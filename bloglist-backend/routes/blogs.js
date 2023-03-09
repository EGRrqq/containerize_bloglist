const blogsRouter = require('express').Router()
const { Blog } = require('../mongo')

blogsRouter.get('/', async (request, response, next) => {
    const blogs = await Blog
        .find({})

    response.status(200).json(blogs)
})

blogsRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
        response.json(blog)
    } else {
        response.status(404).end()
    }
})

blogsRouter.post('/', async (request, response) => {
    const body = request.body
    const blog = new Blog({
        ...body
    })

    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
})


module.exports = blogsRouter