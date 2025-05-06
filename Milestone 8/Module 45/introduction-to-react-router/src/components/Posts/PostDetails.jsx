import { useLoaderData } from "react-router-dom"


function PostDetails() {

    const post = useLoaderData();

    return (
        <div>
            <h2>Post ID: {post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetails

