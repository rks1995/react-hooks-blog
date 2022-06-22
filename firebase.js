import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCZVlNizG5RZCgDbEsxHAQcJLopWYx7qmg',
  authDomain: 'react-hooks-blog-77247.firebaseapp.com',
  projectId: 'react-hooks-blog-77247',
  storageBucket: 'react-hooks-blog-77247.appspot.com',
  messagingSenderId: '94564270352',
  appId: '1:94564270352:web:41a0b103b951c37d83a595',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
