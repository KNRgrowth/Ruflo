import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Owner from "@/components/Owner";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import CallBar from "@/components/CallBar";
import { useSiteEffects } from "@/hooks/useSiteEffects";

const App = () => {
  useSiteEffects();
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Owner />
        <Services />
        <Why />
        <Reviews />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <CallBar />
    </>
  );
};

export default App;
