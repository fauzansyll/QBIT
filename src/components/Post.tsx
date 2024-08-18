import { DataType } from "../types/DataTypes";

const Post = ({ data }: { data: DataType[] }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <p>{item.status ? "Posted" : "Draft"}</p>
        </div>
      ))}
    </>
  );
};

export default Post;
