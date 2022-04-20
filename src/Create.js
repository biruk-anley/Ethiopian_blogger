import { useState, } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('alemayehu');
    const [ispending, setIspending] = useState(false); // at the first it is false no submit
    const history = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
      const blog = { title, body, author };
      
      setIspending(true)  // this is loading since it is posting request

      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body:JSON.stringify(blog)
      }).then(() => {
        console.log("added");
        setIspending(false);
        history("/");
      })
        
}
    
  return (
    <div className="create">
      <h2>Add New BLog</h2>
      <form onSubmit={handlesubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="alemayehu">Alemayehu</option>
          <option value="Zenebe">Zenebe</option>
          <option value="Endalegeta">Endalegeta</option>
        </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <button disabled>Add Blog....</button>}
      </form>
    </div>
  );
};

export default Create;
