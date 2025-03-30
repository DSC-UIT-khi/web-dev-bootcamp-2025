import BlogListing from "@/containers/BlogListing";
import axios from "axios";

const Home = async () => {
  const handleFetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/blogs`
      );

      return data;
    } catch (err) {
      console.error("err", err);
    }
  };

  const data = await handleFetchBlogs();
  return <BlogListing blogs={data.payload} />;
};

export default Home;
