import Footer from "../Components/Common/Footer";
import CourseSection from "../Components/CourseSection";
import Growth from "../Components/Growth";
import Hero from "../Components/Hero";
import HomeHero from "../Components/HomeHero";
import LearningCategories from "../Components/LearningCategories";
import Offer from "../Components/Offer";
import Partners from "../Components/Partners";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div >
      <Hero>
        <HomeHero />
      </Hero>
      <Partners />
      <CourseSection />
      <LearningCategories />
      <Offer />
      <Testimonials />
      <Growth />
      <Footer />
    </div>
  );
};

export default Home;
