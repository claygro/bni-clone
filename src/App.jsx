import BNIInfoSection from "./components/BniInfoSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Success from "./components/Success";
import Testimonial from "./components/Testimonial";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <HeroSection />
          <BNIInfoSection />
          <Testimonial />
          <Success />
          <Footer1 />
          <Footer2 />
        </>
      )}
    </>
  );
}

export default App;
