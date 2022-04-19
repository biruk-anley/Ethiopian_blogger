import { useState, useEffect } from "react";
import BlogLists from "./BlogLists";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  // this is the fucnction which is going to be renderd at the first time and  ever time the state chnage there will be rendering
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs") //get response object 2 use json method and tackle data
        .then((res) => {
          if (!res.ok) {
            throw Error("couldn't fetch data since it doesn't exist"); // this is unable to fetch data error :: to see this error chang feth url like blogss
          }
          return res.json(); // this will parse json into js object
        })
        .then((data) => {
          setBlogs(data);
          setIsloading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message); // this is network error handler // to see this type of error disconnect json server::
          setIsloading(false); // to remove loading message
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {isloading && <div>Loading</div>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {blogs && <BlogLists blogse={blogs} title="All of the Blogs" />}
    </div>
  );
};

export default Home;
