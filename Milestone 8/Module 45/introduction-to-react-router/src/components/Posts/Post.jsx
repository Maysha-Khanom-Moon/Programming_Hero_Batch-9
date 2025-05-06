import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Post({post}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px 0",
        backgroundColor: "skyblue",
      }}
    >
        <h2>Post ID: {post.id}</h2>
        <h3>{post.title}</h3>
        <Link to={`/posts/${post.id}`}>Show Details</Link>
    </div>
  );
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post

