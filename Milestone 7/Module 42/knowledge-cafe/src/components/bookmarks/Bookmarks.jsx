import Bookmark from "./Bookmark";

function Bookmarks({bookmarks}) {
  return (
    <div>
      <div className="bg-[#6047EC1A] text-center px-12 py-5 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-[#6046EC]">Spent time on read: 177 min</h2>
      </div>

      <div className="p-8 bg-[#1111110D] rounded-lg">
        <h2 className="text-2xl font-bold text-[#111] mb-4">Bookmarked Blogs: 8</h2>
        {
            bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
      </div>
    </div>
  )
}

export default Bookmarks
