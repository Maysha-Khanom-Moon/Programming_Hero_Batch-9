import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

function Blog({blog, handleBookmark, handleReadingTime}) {
    const {cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;

    return (
        <div className="flex flex-col border-b-[1px] border-gray-300 pb-4 gap-3">
            <img className='rounded-md max-h-96' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-4'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='flex flex-col '>
                        <h3 className='font-bold text-2xl'>{author}</h3>
                        <p className='text-[#11111199] font-semibold text-base'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center text-[#11111199]'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>

            <div className='flex gap-4 text-[#11111199] text-xl font-medium'>
                {
                    hashtags.map(hashtag => <p>{hashtag}</p>)
                }
            </div>
            <button onClick={() => handleReadingTime(blog)} className='text-blue-600 underline hover:text-blue-800 flex justify-start'>Mark as read</button>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default Blog