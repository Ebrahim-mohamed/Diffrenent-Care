import ServiceCard from "./ServiceCard";

// Imported images
import Banner from "../assets/Banner-icon.png";
import ServiceCard01 from "../assets/icon01.svg";
import ServiceCard02 from "../assets/icon02.svg";
import ServiceCard03 from "../assets/icon03.svg";
import ServiceCard04 from "../assets/icon04.svg";
import Q from "../assets/Q-icon.png";
import Q01 from "../assets/Q-icon01.png";
import Q02 from "../assets/Q-icon02.png";
import Q03 from "../assets/Q-icon03.png";
import Q04 from "../assets/Q-icon04.png";
import RateIMG01 from "../assets/rate01.png";
import RateIMG02 from "../assets/rate02.png";

const HomePage = () => {
  const services = [
    {
      icon: (
        <img
          src={ServiceCard01}
          alt="Service 1"
          className="w-16 h-16 mx-auto"
        />
      ),
      title: "العناية النفسية",
      description: "دعم متخصص لتحسين الصحة النفسية والعاطفية",
    },
    {
      icon: (
        <img
          src={ServiceCard02}
          alt="Service 2"
          className="w-16 h-16 mx-auto"
        />
      ),
      title: "رعاية كبار السن",
      description: "رعاية متميزة للمسنين مع الاهتمام بالراحة والسلامة",
    },
    {
      icon: (
        <img
          src={ServiceCard03}
          alt="Service 3"
          className="w-16 h-16 mx-auto"
        />
      ),
      title: "الفحوصات والتحاليل الطبية",
      description: "خدمات طبية شاملة ودقيقة للتحليل والفحص",
    },
    {
      icon: (
        <img
          src={ServiceCard04}
          alt="Service 4"
          className="w-16 h-16 mx-auto"
        />
      ),
      title: "رعاية الأم والطفل",
      description: "خدمات متكاملة لرعاية الأم والطفل بأعلى المعايير",
    },
  ];

  const whyUsIcons = [
    { icon: Q, text: "أفضل فريق طبي مدرب" },
    { icon: Q01, text: "خدمات طبية منزلية فريدة" },
    { icon: Q02, text: "خدمات بجودة عالية" },
    { icon: Q03, text: "أسعار تنافسية" },
    { icon: Q04, text: "دعم متواصل 24/7" },
  ];

  const testimonials = [
    {
      img: RateIMG01,
      name: "محمد أسامة",
      location: "الرياض، السعودية",
      quote: "كانت تجربة استثنائية مع خدمات Different Care.",
    },
    {
      img: RateIMG02,
      name: "علي أحمد",
      location: "جدة، السعودية",
      quote: "أفضل خدمات طبية منزلية عالية الجودة.",
    },
  ];

  const stats = [
    { number: "120+", label: "أطباء متخصصون" },
    { number: "250+", label: "توصيات طبية" },
    { number: "1000+", label: "مستخدمون سنوياً" },
  ];

  return (
    <div dir="rtl" className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* صورة القسم */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/path-to-image.png" // ضع هنا مسار الصورة
              alt="Doctor"
              className="rounded-lg shadow-lg w-[400px] h-auto"
              style={{ borderRadius: "15px" }} // لضبط حواف مستديرة
            />
          </div>

          {/* النصوص */}
          <div className="md:w-1/2 text-center md:text-right mt-8 md:mt-0">
            <h1 className="text-3xl font-extrabold mb-4 text-blue-900 leading-snug">
              بيتك هو مستشفاك
            </h1>
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              نحن في الرعاية المختلفة للخدمات الطبية نؤمن بأن الرعاية الصحية لا
              تقتصر على جدران المستشفيات. نسعى لتقديم تجربة صحية مريحة ومميزة
              لعملائنا في بيوتهم، حيث يجدون الراحة والأمان.
            </p>
            <button className="bg-blue-900 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
              تحدث مع طبيبك
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <img src={Banner} alt="About Banner" className="mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-primary-blue mb-4">
            عن الرعاية المختلفة{" "}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            نسعى لتقديم أفضل الخدمات الطبية المنزلية لعملائنا.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-blue">
            خدماتنا
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-blue mb-8">
            لماذا الرعاية المختلفة ?
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {whyUsIcons.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.icon}
                  alt={`Why Us ${index}`}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-blue">
            آراء العملاء
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg p-6 text-center"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-secondary-blue mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <h4 className="font-bold text-primary-blue">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-primary-blue">
                  {stat.number}
                </h3>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary-blue">
            تواصل معنا
          </h2>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="اسمك"
              className="block w-full mb-4 p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="block w-full mb-4 p-3 border rounded-lg"
            />
            <textarea
              placeholder="رسالتك..."
              className="block w-full mb-4 p-3 border rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-accent-blue text-white py-2 px-6 rounded-lg"
            >
              إرسال
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
