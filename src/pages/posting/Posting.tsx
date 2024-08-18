import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Posting.css";

const Posting = () => {
  const navigate = useNavigate();
  const storedPosts = localStorage.getItem("Posts");
  const [data, setData] = useState(storedPosts ? JSON.parse(storedPosts) : []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const status = formData.get("status") === "true";

    const storedPosts = localStorage.getItem("Posts");
    const existingPosts = storedPosts ? JSON.parse(storedPosts) : [];
    const updatedPosts = [...existingPosts, { title, content, status }];
    localStorage.setItem("Posts", JSON.stringify(updatedPosts));
    setData(updatedPosts);
  };
  useEffect(() => {
    if (localStorage.getItem("user") === "false") {
      navigate("/login");
    } else {
      navigate("/posting");
    }
  }, []);

  // router.useLocation();
  // console.log("router: ", router);

  const toggleStatus = (index: number) => {
    const updatedPosts = data.map((item: any, idx: number) =>
      idx === index ? { ...item, status: !item.status } : item
    );
    setData(updatedPosts);
    localStorage.setItem("Posts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="main">
      <form className="d-flex second" onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" />
        <input type="text" id="content" name="content" />
        <select name="status" id="status">
          <option value="true">Post</option>
          <option value="false">Draft</option>
        </select>
        <button type="submit">Post</button>
      </form>
      {data.map((item: any, index: number) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <p>{item.status ? "Posted" : "Draft"}</p>
          <button onClick={() => toggleStatus(index)}>
            {item.status ? "Revert to Draft" : "Post Now"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posting;
