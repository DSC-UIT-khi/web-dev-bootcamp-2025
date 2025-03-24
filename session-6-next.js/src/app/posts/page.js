import Link from "next/link";

export default async function Users() {
  const handleFetchAPI = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return data;
  };

  const posts = await handleFetchAPI();
  console.log("posts", posts);
  return (
    <div>
      <h1>Dynamic Data</h1>
      {posts?.length > 0 &&
        posts?.map(({ title, body, id }, index) => (
          <Link key={index} className="user-record" href={`/posts/${id}`}>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
          </Link>
        ))}
    </div>
  );
}
