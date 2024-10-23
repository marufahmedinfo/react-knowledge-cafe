import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  
  const  handleAddToBookmark = blog => {
    // console.log('bookmarks  adding soon', blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }


  return (
    <>
      
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
      
    </>
  )
}

export default App
