import Stati from "./statictics";
import ContactUs from "./contact-us";
import Care from "./care";
import Testimonial from "./testmonial";
import Services from "./services";
import Hero from "./hero";
import AboutUs from "./aboutUs";
import Programs from "./programs";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <AboutUs />
      <Services />
      <Care />
      <Programs />
      <Stati />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default HomePage;
