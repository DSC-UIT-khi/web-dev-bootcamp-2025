export default async function User({ params }) {
  const { id } = await params;
  const handleFetchAPI = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return data;
  };

  const post = await handleFetchAPI();

  return (
    <div>
      <h1>Dynamic Data</h1>
      <div>
        <p>Title: {post?.title}</p>
        <p>Body: {post?.body}</p>
      </div>
    </div>
  );
}
