export default function Post({post}){
    return(
        <div>
        <h5>{post.title}</h5>
        <p>{post.body}</p>
        </div>
    )
}