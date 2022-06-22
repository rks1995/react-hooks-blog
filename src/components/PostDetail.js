import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

const PostDetail = () => {
  const [post, setPost] = useState({})
  const { postID } = useParams()

  useEffect(() => {
    async function getDocumentById() {
      const docRef = doc(db, 'posts', postID)
      try {
        const docSnap = await getDoc(docRef)
        setPost(docSnap.data())
      } catch (error) {
        console.log('error', error)
      }
    }
    getDocumentById()
  }, [postID])

  return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      <p>{post.post}</p>
    </div>
  )
}

export default PostDetail
