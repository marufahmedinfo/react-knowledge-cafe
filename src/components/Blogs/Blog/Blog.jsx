import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark}) => {
    // console.log(blog)
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='w-full mb-8 rounded-3xl' src={cover} alt={`caver img ${cover}`} />
            <div className='flex justify-between mb-4'>
            <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                <span>{reading_time} min read</span>
                <button className='ml-2 text-2xl text-red-600' onClick={() =>handleAddToBookmark(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx}>#{hash}</span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;