import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import Services from "./components/Services";
import About from "./components/About";
import ArticleDeals from "./components/ArticleDeals";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const hamburgerToggle = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  return (
    <>
      <Navbar hamburgerToggle={() => hamburgerToggle()} />
      <HeroImage />
      <Services />
      <About />
      <ArticleDeals />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
