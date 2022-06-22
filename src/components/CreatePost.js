import { useState } from 'react'
import db from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const CreatePost = () => {
  const title = useHandleChange('')
  const subtitle = useHandleChange('')
  const content = useHandleChange('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('title', title)
    console.log('subtitle', subtitle.value)
    console.log('content', content.value)

    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        title: title.value,
        subtitle: subtitle.value,
        post: content.value,
        createdAt: new Date(),
      })
      console.log('docref', docRef)
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <div className='create-post'>
      <h1>Create Post</h1>

      <form action='' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Title</label>
          <input type='text' {...title} />
        </div>
        <div className='form-field'>
          <label>Sub Title</label>
          <input type='text' {...subtitle} />
        </div>
        <div className='form-field'>
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
        <button className='create-post-btn'>Submit</button>
      </form>
    </div>
  )
}

//custom hook
const useHandleChange = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange,
  }
}

export default CreatePost
