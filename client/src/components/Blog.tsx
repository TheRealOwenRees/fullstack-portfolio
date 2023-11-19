import BlogPost from "./BlogPost.tsx";
import binaryBG from "../assets/images/blog/binaryBG.webp";

function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog-header">
        <h2 className="section-title">Blog</h2>
        <h3 className="section-subtitle">Featured Posts</h3>
      </div>
      <div className="blog-posts">
        <BlogPost
          image={binaryBG}
          title="Using Bitwise XOR to Solve the 'Lonely Integer' Problem"
          url="https://dev.to/therealowenrees/using-bitwise-xor-to-solve-the-lonely-integer-problem-2ea8"
        />
      </div>
    </section>
  );
}

export default Blog;
