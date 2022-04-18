const BlogList = ({ blogse, title }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            
        {blogse.map((blog) => (
          <div className="blog-preview">
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </div>
        ))}
      </div>
    );
}
 
export default BlogList;