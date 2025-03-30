import axios from "axios";
import React from "react";

const BlogDetail: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = await params;
  const handleFetchBlog = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/blogs/${id}`
      );

      return data;
    } catch (err) {
      console.error("err", err);
    }
  };

  const data = await handleFetchBlog();

  console.log("data", data);
  return <div>BlogDetail</div>;
};

export default BlogDetail;
