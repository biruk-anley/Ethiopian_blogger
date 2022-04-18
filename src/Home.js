import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "ዉልብታ",
      body: "lorem lorem lorem epseum so that no onwe",
      author: "አለማየሁ ገላጋይ",
      id: 1,
    },
    {
      title: "ልጅነት",
      body: "fungay ke hitsanu gar eyetechawete eylal mushira hun tebale",
      author: "ዘነበ ወላ",
      id: 2,
    },
    {
      title: "አቦቸር",
      body: "salsedbachew eskezare semche emalakewun sidib sedebugn ",
      author: "እንዳለጌታ ከበደ",
      id: 3,
    },
    
  ]);
    const handleDelete = (id) => {
        const newset = blogs.filter(blog => blog.id !== id);
        setBlogs(newset);
    }

  return (
    <div className="home">
      <BlogList blogse={blogs} title="All of the Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
