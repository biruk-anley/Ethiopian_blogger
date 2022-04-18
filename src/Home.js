import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
      {
        title: "Wulibta",
        body: "lorem lorem lorem epseum so that no onwe",
        author: "Alemayehu Gelagay",
        id: 1,
      },
      {
        title: "Lijnet",
        body: "fungay ke hitsanu gar eyetechawete eylal mushira hun tebale",
        author: "Zenebe wella",
        id: 2,
      },
      {
        title: "Abocher",
        body: "salsedbachew eskezare semche emalakewun sidib sedebugn ",
        author: "Endalegeta Kebede",
        id: 3,
      },
    ]);
   
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            )
            )}   
        </div>
     );
}
  
export default Home;