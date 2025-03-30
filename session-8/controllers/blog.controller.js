const BlogModel = require("../models/blog.model");

const CreateBlogController = async (req, res) => {
  try {
    const { title, description, category, tags, image } = req.body;

    const blog = new BlogModel({
      title,
      description,
      category,
      tags,
      image,
    });

    const data = await blog.save();

    res.status(201).json({
      message: "Blog created successfully",
      payload: {
        title,
        description,
        category,
        tags,
        image,
      },
    });
  } catch (err) {
    console.log("err", err);
    return err?.message || err || "Something went wrong!";
  }
};

const GetBlogController = async (req, res) => {
  try {
    const blogs = await BlogModel.find();

    res.status(200).json({
      message: "Blogs fetched successfully!",
      payload: blogs,
    });
  } catch (err) {
    console.log("err", err);
    return err?.message || err || "Something went wrong!";
  }
};

const GetBlogByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("req", id);
    const blog = await BlogModel.findById(id);

    res.status(200).json({
      message: "Blog fetched successfully!",
      payload: blog,
    });
  } catch (err) {
    console.log("err", err);
    return err?.message || err || "Something went wrong!";
  }
};

module.exports = {
  CreateBlogController,
  GetBlogController,
  GetBlogByIdController,
};
