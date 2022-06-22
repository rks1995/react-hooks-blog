import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function readData() {
      try {
        const docSnapshot = await getDocs(collection(db, 'posts'))
        let post = []
        docSnapshot.forEach((doc) => {
          post.push(doc.data())
        })
        setPosts(post)
      } catch (error) {
        console.log('error', error)
      }
    }
    readData()
  }, [])

  return (
    <div className='home'>
      <h1>Posts</h1>
      <div id='blog-by'>RatnaKr</div>
      {posts.map((post, index) => {
        return (
          <div className='post' key={index}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.subtitle}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Home
