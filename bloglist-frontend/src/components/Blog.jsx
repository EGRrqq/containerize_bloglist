import React from 'react'
import { useSelector } from 'react-redux'
import { useMatch } from 'react-router-dom'

const Blog = () => {
    const blogs = useSelector((state) => state.blogs)

    const blogMatch = useMatch('/blogs/:id')
    const matchedBlog = blogMatch
        ? blogs.find((blog) => blog.id === blogMatch.params.id)
        : null

    if (!matchedBlog) {
        return null
    }

    return (
        <div className="blog-details">
            <h2>{matchedBlog.title}</h2>
            <div>{matchedBlog.url}</div>
            <div>
                likes: {matchedBlog.likes}
            </div>
            <div>added by {matchedBlog.author}</div>
        </div>
    )
}

export default Blog
