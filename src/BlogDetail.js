import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
     const {
       data: blog,
       error,
       isloading,
     } = UseFetch("http://localhost:8000/blogs/" + id);

    const deletehandle = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE",

        }).then(() => {
            navigate("/")
        })
    }
    
    return (
        <div className="blog-details">
            {isloading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div className="body-detail">
                        {blog.body}
                    </div>
                    <button onClick={deletehandle}>Delete</button>
                </article>
            )}
        
    
      </div>
    );
}
 
export default BlogDetail;