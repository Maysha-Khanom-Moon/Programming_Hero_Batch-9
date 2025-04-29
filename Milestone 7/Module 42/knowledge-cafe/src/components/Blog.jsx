import PropTypes from 'prop-types';

function Blog({blog}) {
    console.log(blog);

    return (
        <div>
        
        </div>
    )
}

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog