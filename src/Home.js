const Home = () => {
    const shoot = (n,e) => {
        console.log("clicked " + n, e.buttons);
    }
    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={(e)=>{shoot("100000", e)}}>click me</button>
        </div>
     );
}
  
export default Home;