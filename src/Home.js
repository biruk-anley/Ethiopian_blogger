import { useState, useEffect} from "react";
import BlogLists from "./BlogLists";

const Home = () => {
  const [name, setName] = useState("Jakob");
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
    const newset = blogs.filter((blog) => blog.id !== id);
    setBlogs(newset);
  };

  // this is the fucnction which is going to be renderd at the first time and  ever time the state chnage there will be rendering
  useEffect(() => {
    console.log("use effect runn");
    console.log(name);
 
  }, []);

  return (
    <div className="home">
      <BlogLists
        blogse={blogs}  
        title="All of the Blogs"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName("Peter")}>ChangeName</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
