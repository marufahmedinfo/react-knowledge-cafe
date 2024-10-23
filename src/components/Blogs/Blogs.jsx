
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";


const Blogs = ({handleAddToBookmark}) => {
    const [bolgs, setBlogs] = useState([]);
    useEffect(()=> {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            {/* <h1 className="text-2xl font-bold">Blogs : {bolgs.length}</h1> */}
            {
                bolgs.map(blog => <Blog
                     key={blog.id}
                     handleAddToBookmark={handleAddToBookmark}
                     blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blogs;