import Post from "../components/Post";
import "./App.css";

function App() {
  const storedPosts = localStorage.getItem("Posts");
  const data = JSON.parse(storedPosts || "[]");
  const filteredData = data.filter((item: any) => item.status === true);

  return (
    <div className="main">
      {filteredData.map((item: any, index: number) => (
        <div key={index}>
          <Post data={[item]} />
        </div>
      ))}
    </div>
  );
}

export default App;
