import PropTypes from 'prop-types'

function Post({post}) {
  return (
    <div className=''>
        <h3>{post.title}</h3>
    </div>
  )
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post

