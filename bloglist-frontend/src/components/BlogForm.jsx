import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'

const BlogForm = ({ changeVisibility }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const dispatch = useDispatch()

    const handleCreate = async (event) => {
        event.preventDefault()
        try {
            dispatch(createBlog({ title, author, url }))
            setTitle('')
            setAuthor('')
            setUrl('')
            changeVisibility()
        } catch (exception) {
            console.log(exception)
        }
    }

    return (
        <form onSubmit={handleCreate}>
            <div>
                title:
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div>
                author:
                <input
                    id="author"
                    type="text"
                    name="author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
            </div>
            <div>
                url:
                <input
                    id="url"
                    type="text"
                    name="url"
                    onChange={(event) => setUrl(event.target.value)}
                    value={url}
                />
            </div>
            <button type="submit">create</button>
        </form>
    )
}

export default BlogForm
