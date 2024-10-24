import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  
  const  handleAddToBookmark = blog => {
    // console.log('bookmarks  adding soon', blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  };

  const handleReadTime = (id,time) => {
    // console.log("adding reading time", time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    const remove = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remove)
  }


  return (
    <>
      
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmark={handleAddToBookmark} handleReadTime={handleReadTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
      
    </>
  )
}

export default App
