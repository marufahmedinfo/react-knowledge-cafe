
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2 pt-4 rounded-2xl">
        {/* <div>
            <h3 className="text-3xl">Reading Time: {}</h3>
        </div> */}
        <h2 className="text-2xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
        {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
        }
    </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;