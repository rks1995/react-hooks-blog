import { Routes, Route } from 'react-router-dom'
import { Navbar, Home, PostDetail, CreatePost } from './'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<PostDetail />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </div>
  )
}

export default App
