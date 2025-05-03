import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

function Bookmarks({bookmarks, readingTime}) {
  return (
    <div>
      <div className="bg-[#6047EC1A] text-center px-12 py-5 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-[#6046EC]">Spent time on read: {readingTime} min</h2>
      </div>

      <div className="p-8 bg-[#1111110D] rounded-lg">
        <h2 className="text-2xl font-bold text-[#111] mb-4">Bookmarked Blogs: {bookmarks.length}</h2>
        <div className="flex flex-col gap-6">
          {
            bookmarks.map((bookmark) => <Bookmark key={bookmark.length} bookmark={bookmark}></Bookmark>)
          }
        </div>
        
      </div>
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks
