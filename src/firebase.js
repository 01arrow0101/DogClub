import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCsNhQ8tJ91OB0ekyaxB_FkZ3Po89JBMVY',
  authDomain: 'dogclub-7ffd5.firebaseapp.com',
  projectId: 'dogclub-7ffd5',
  storageBucket: 'dogclub-7ffd5.firebasestorage.app',
  messagingSenderId: '443684529996',
  appId: '1:443684529996:web:df6e55a02b97dad25f91e9',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
