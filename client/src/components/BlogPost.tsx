import { BlogPostProps } from "../../types.ts";

const BlogPost = ({ image, title, url }: BlogPostProps) => {
  return (
    <div className="blog-post">
      <div>
        <a href={url} target="_blank">
          <img src={image} alt="blog post" className="blog-image" />
        </a>
      </div>
      <div>
        <a href={url} target="_blank">
          <h4 className="blog-title">{title}</h4>
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
