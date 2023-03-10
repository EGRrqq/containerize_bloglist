// import axios from 'axios'
const baseUrl = '/api/blogs'

import axios from '../util/apiClient'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get('/blogs')
    return response.data
}

const create = async (blogObj) => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.post('/blogs', blogObj, config)
    return response.data
}

const update = async (updatedBlogObj) => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.put(
        `'/blogs'/${updatedBlogObj.id}`,
        updatedBlogObj,
        config
    )
    return response.data
}

const remove = async (blogId) => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.delete(`'/blogs'/${blogId}`, config)
    return response.data
}

export default { setToken, getAll, create, update, remove }
