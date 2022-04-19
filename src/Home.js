import BlogLists from "./BlogLists";
import UseFetch from "./UseFetch";

const Home = () => {
  const {
    data: blogs,
    isloading,
    error,
  } = UseFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isloading && <div>Loading</div>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {blogs && <BlogLists blogse={blogs} title="All of the Blogs" />}
    </div>
  );
};

export default Home;
