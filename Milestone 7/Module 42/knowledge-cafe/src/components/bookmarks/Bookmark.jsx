import PropTypes from "prop-types"

function Bookmark({bookmark}) {
  return (
    <div className="bg-white p-5 text-[#111] rounded-lg">
      <p className="text-lg font-semibold">{bookmark.title}</p>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark
