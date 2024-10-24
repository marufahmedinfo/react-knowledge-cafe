
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2 pt-4 rounded-2xl">
             <div className='border-2 border-purple-300 m-10 p-6 rounded-xl bg-purple-50'>
                 <h3 className="text-2xl">Reading Time: {readingTime} min</h3>
             </div>
        <h2 className="text-2xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
        {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark> )
        }
    </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;