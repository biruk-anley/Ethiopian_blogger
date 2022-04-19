import { Link } from "react-router-dom";

const BlogLists = ({ blogse, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogse.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>የ ተጻፈው በ {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogLists;
