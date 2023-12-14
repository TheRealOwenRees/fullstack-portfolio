import BlogPost from "./BlogPost.tsx";
import binaryBG from "../assets/images/blog/binaryBG.webp";
import gradientBG from "../assets/images/blog/gradient.webp";

function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog-header">
        <h2 className="section-title">Blog</h2>
        <h3 className="section-subtitle">Featured Posts</h3>
      </div>
      <div className="blog-posts">
        <BlogPost
          image={gradientBG}
          title="Utilising Bitwise Operators in JavaScript, by Building a RGB to Hex Colour Convertor"
          url="https://dev.to/therealowenrees/utilising-bitwise-operators-in-javascript-by-building-a-rgb-to-hex-colour-convertor-24ai"
        />
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
