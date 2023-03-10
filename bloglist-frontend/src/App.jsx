import { Route, Routes } from 'react-router-dom'

import Blog from './components/Blog'
import BlogList from './components/BlogList'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<BlogList />} />
                <Route path="/blogs/:id" element={<Blog />} />
            </Routes>
        </div>
    )
}

export default App
