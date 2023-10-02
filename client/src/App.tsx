import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Featured from "./components/Featured.tsx";
import About from "./components/About.tsx";
// import Latest from "./components/Latest.tsx";
import Connect from "./components/Connect.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <About />
      {/*<Latest />*/}
      <Connect />
      <Footer />
    </>
  );
}

export default App;
