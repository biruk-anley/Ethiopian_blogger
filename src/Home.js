import { useState } from "react";
import BlogList from "./BlogList";

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
    {
      title: "Wurisa",
      body: "lorem lorem amperopir lorem epseum so that no onwe",
      author: "Alemayehu Gelagay",
      id: 4,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogse={blogs} title="All of the Blogs" />
      <BlogList
        blogse={blogs.filter((blog) => blog.author === "Alemayehu Gelagay")}
        title="Alemayehu blog"
      />
    </div>
  );
};

export default Home;
